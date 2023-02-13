
import { ExtendedField } from "../field/binary-field";


const poly = [
    {
        "power": 3,
        "coeff": "0x01"
    },
    {
        "power": 2,
        "coeff": "0x01"
    },
    {
        "power": 0,
        "coeff": "0x01"
    }
]



const poly8 = [
    {
        "power": 8,
        "coeff": "0x01"
    },
    {
        "power": 7,
        "coeff": "0x01"
    },
    {
        "power": 6,
        "coeff": "0x01"
    },
    {
        "power": 5,
        "coeff": "0x01"
    },
    {
        "power": 4,
        "coeff": "0x01"
    },
    {
        "power": 2,
        "coeff": "0x01"
    },
    {
        "power": 0,
        "coeff": "0x01"
    }
]

var assert = require('assert');



describe('Testing Galoas Field Aritmetic for x^3 + x^2 + 1', function () {

    const FIELD: ExtendedField = new ExtendedField(poly);

        it('Adding elements', function () {

            assert.ok(FIELD.add(2n, 0n) == 2n, "Checking addition with zero");
            assert.ok(FIELD.add(2n, 2n) == 0n, "Checking addition of element with itself");
            assert.ok(FIELD.add(3n, 6n) == 5n, "Checking addition for (3,6)");
            assert.ok(FIELD.add(3n, 7n) == 4n, "Checking addition for (3,7)");
        })

        it('Multiplying elements', function () {

            assert.ok(FIELD.multiply(2n, 0n) == 0n, "Checking multiplication with zero");
            assert.ok(FIELD.multiply(2n, 2n) == 4n, "Checking multiplication of element with itself");
            assert.ok(FIELD.multiply(7n, 1n) == 7n, "Checking multiplication with neutral");
            assert.ok(FIELD.multiply(3n, 6n) == 7n, "Checking multiplication (3 , 6)");
            assert.ok(FIELD.multiply(5n, 6n) == 4n, "Checking multiplication (5 , 6)");
            assert.ok(FIELD.multiply(7n, 5n) == 1n, "Checking multiplication (7 , 5)");
            assert.ok(FIELD.multiply(7n, 7n) == 2n, "Checking multiplication (7 , 7)");
            assert.ok(FIELD.multiply(4n, 7n) == 6n, "Checking multiplication (4 , 7)");
            assert.ok(FIELD.multiply(3n, 7n) == 4n, "Checking multiplication (3 , 7)");
        })

        it('Invers elements', function () {

            assert.ok(FIELD.invers(2n) == 6n, "Checking invers of 2");
            assert.ok(FIELD.invers(7n) == 5n, "Checking invers of 7");
            assert.ok(FIELD.invers(3n) == 4n, "Checking invers of 3");
            assert.ok(FIELD.invers(1n) == 1n, "Checking invers of 1");
            assert.ok(FIELD.multiply(FIELD.invers(3n) , 3n) == 1n, "Checking invers of 3");
            assert.ok(FIELD.multiply(FIELD.invers(5n) , 5n) == 1n, "Checking invers of 5");

        })


})

describe('Testing Galoas Field Aritmetic for x^8 + x^7 + x^6 + x^5 + x^4 + x^2 + 1', function () {

    const FIELD: ExtendedField = new ExtendedField(poly8);

        it('Adding elements', function () {

            assert.ok(FIELD.add(2n, 0n) == 2n, "Checking addition with zero");
            assert.ok(FIELD.add(2n, 2n) == 0n, "Checking addition of element with itself");
            assert.ok(FIELD.add(3n, 6n) == 5n, "Checking addition for (3 , 6)");
            assert.ok(FIELD.add(3n, 7n) == 4n, "Checking addition for (3 , 7)");
        })

        it('Multiplying Elements', function () {

            assert.ok(FIELD.multiply(2n, 0n) == 0n, "Checking multiplication with zero");
            assert.ok(FIELD.multiply(2n, 2n) == 4n, "Checking multiplication of element with itself");
            assert.ok(FIELD.multiply(7n, 1n) == 7n, "Checking multiplication with neutral");
            assert.ok(FIELD.multiply(3n, 6n) == 10n, "Checking multiplication (3 , 6)");
            assert.ok(FIELD.multiply(5n, 6n) == 30n, "Checking multiplication (5 , 6)");
            assert.ok(FIELD.multiply(7n, 7n) == 21n, "Checking multiplication (7 , 7)");
            assert.ok(FIELD.multiply(56n, 32n) == 212n, "Checking multiplication (56 , 32)");
            assert.ok(FIELD.multiply(200n, 129n) == 249n, "Checking multiplication (200 , 129)");
        })
        it('Determing Invers', function () {

            assert.ok(FIELD.invers(1n) == 1n, "Checking invers of 1");
            assert.ok(FIELD.multiply(FIELD.invers(212n) , 212n) == 1n, "Checking invers of 212");
            assert.ok(FIELD.multiply(FIELD.invers(248n) , 248n) == 1n, "Checking invers of 248");
            assert.ok(FIELD.multiply(FIELD.invers(64n) , 64n) == 1n, "Checking invers of 64");
        })


})