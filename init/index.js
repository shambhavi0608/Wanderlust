if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

const MONGO_URL = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    const updatedData = await Promise.all(
        data.data.map(async (obj) => {
            let response;
            try {
                response = await geoCodingClient
                    .forwardGeocode({
                        query: `${obj.location}, ${obj.country}`,
                        limit: 1,
                    })
                    .send();
            } catch (error) {
                console.error(`Geocoding failed for ${obj.location}, ${obj.country}:`, error);
            }

            const geometry = response?.body?.features?.[0]?.geometry || obj.geometry || null;

            // Purane database export se aayi _id, reviews, owner, __v fields hata do —
            // ye humare naye Atlas database mein valid/existing nahi hain
            const { _id, reviews, owner, __v, ...cleanObj } = obj;

            return {
                ...cleanObj,
                geometry,
            };
        })
    );

    await Listing.insertMany(updatedData);
    console.log("data was initialized");
};

initDB();