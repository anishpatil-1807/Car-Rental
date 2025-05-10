const Car = require('../models/Car');

// Get all cars
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single car
exports.getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create car
exports.createCar = async (req, res) => {
    const car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        available: req.body.available
    });

    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update car
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (car) {
            Object.assign(car, req.body);
            const updatedCar = await car.save();
            res.json(updatedCar);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete car
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (car) {
            await car.remove();
            res.json({ message: 'Car deleted' });
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};