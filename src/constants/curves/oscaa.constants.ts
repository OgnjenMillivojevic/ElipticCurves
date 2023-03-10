export const OSCAA = {
    "name": "OSCAA",
    "desc": "http://gmssl.org/english.html",
    "curves": [
        {
            "form": "Weierstrass",
            "name": "SM2",
            "category": "oscaa",
            "desc": "",
            "oid": "1.2.156.10197.1.301",
            "field": {
                "type": "Prime",
                "p": "0xfffffffeffffffffffffffffffffffffffffffff00000000ffffffffffffffff",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0xfffffffeffffffffffffffffffffffffffffffff00000000fffffffffffffffc"
                },
                "b": {
                    "raw": "0x28e9fa9e9d9f5e344d5a9e4bcf6509a7f39789f515ab8f92ddbcbd414d940e93"
                }
            },
            "order": "0xfffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123",
            "cofactor": "0x01",
            "generator": {
                "x": {
                    "raw": "0x32c4ae2c1f1981195f9904466a39c9948fe30bbff2660be1715a4589334c74c7"
                },
                "y": {
                    "raw": "0xbc3736a2f4f6779c59bdcee36b692153d0a9877cc62a474002df32e52139f0a0"
                }
            }
        }
    ]
}