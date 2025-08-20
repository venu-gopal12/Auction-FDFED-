const mongoose = require('mongoose');
const { itemschema } = require("./itemmodel");

const sellerschema = mongoose.Schema({
    name: String,
    email: { type: String, index: true, unique: true },
    phone: { type: String, index: true },
    password: String,
    items: [itemschema]
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Ensure indexes are created
sellerschema.index({ email: 1 }, { unique: true });
sellerschema.index({ phone: 1 });

const sellermodel = mongoose.model("unverified_sellers", sellerschema);
module.exports = sellermodel;