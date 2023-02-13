export const NUMS = {
    "name": "NUMS",
    "desc": "Microsoft Nothing Up My Sleeve (NUMS) curves from: <https://eprint.iacr.org/2014/130> and <https://tools.ietf.org/html/draft-black-numscurves-02>",
    "curves": [
        {
            "form": "Weierstrass",
            "name": "numsp256d1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff43",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff40"
                },
                "b": {
                    "raw": "0x25581"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffffe43c8275ea265c6020ab20294751a825",
            "cofactor": "0x01",
            "generator": {
                "x": {
                    "raw": "0x01"
                },
                "y": {
                    "raw": "0x696f1853c1e466d7fc82c96cceeedd6bd02c2f9375894ec10bf46306c2b56c77"
                }
            }
        },
        {
            "form": "Twisted",
            "name": "numsp256t1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff43",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42"
                },
                "d": {
                    "raw": "0x3bee"
                }
            },
            "order": "0x3fffffffffffffffffffffffffffffffbe6aa55ad0a6bc64e5b84e6f1122b4ad",
            "cofactor": "0x04",
            "generator": {
                "x": {
                    "raw": "0x0d"
                },
                "y": {
                    "raw": "0x7d0ab41e2a1276dba3d330b39fa046bfbe2a6d63824d303f707f6fb5331cadba"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "numsp384d1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec3",
                "bits": 384
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec0"
                },
                "b": {
                    "raw": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77bb"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffffffffffffffffffffd61eaf1eeb5d6881beda9d3d4c37e27a604d81f67b0e61b9",
            "cofactor": "0x01",
            "generator": {
                "x": {
                    "raw": "0x02"
                },
                "y": {
                    "raw": "0x3c9f82cb4b87b4dc71e763e0663e5dbd8034ed422f04f82673330dc58d15ffa2b4a3d0bad5d30f865bcbbf503ea66f43"
                }
            }
        },
        {
            "form": "TwistedEdwards",
            "name": "numsp384t1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec3",
                "bits": 384
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec2"
                },
                "d": {
                    "raw": "0x5158a"
                }
            },
            "order": "0x3fffffffffffffffffffffffffffffffffffffffffffffffecd7d11ed5a259a25a13a0458e39f4e451d6d71f70426e25",
            "cofactor": "0x04",
            "generator": {
                "x": {
                    "raw": "0x08"
                },
                "y": {
                    "raw": "0x749cdaba136ce9b65bd4471794aa619daa5c7b4c930bff8ebd798a8ae753c6d72f003860febabad534a4acf5fa7f5bee"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "numsp512d1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc7",
                "bits": 512
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc4"
                },
                "b": {
                    "raw": "0x1d99b"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b3ca4fb94e7831b4fc258ed97d0bdc63b568b36607cd243ce153f390433555d",
            "cofactor": "0x01",
            "generator": {
                "x": {
                    "raw": "0x02"
                },
                "y": {
                    "raw": "0x1c282eb23327f9711952c250ea61ad53fcc13031cf6dd336e0b9328433afbdd8cc5a1c1f0c716fdc724dde537c2b0adb00bb3d08dc83755b205cc30d7f83cf28"
                }
            }
        },
        {
            "form": "TwistedEdwards",
            "name": "numsp512t1",
            "category": "nums",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc7",
                "bits": 512
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc6"
                },
                "d": {
                    "raw": "0x9baa8"
                }
            },
            "order": "0x3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa7e50809efdabbb9a624784f449545f0dcea5ff0cb800f894e78d1cb0b5f0189",
            "cofactor": "0x04",
            "generator": {
                "x": {
                    "raw": "0x20"
                },
                "y": {
                    "raw": "0x7d67e841dc4c467b605091d80869212f9ceb124bf726973f9ff048779e1d614e62ae2ece5057b5dad96b7a897c1d72799261134638750f4f0cb91027543b1c5e"
                }
            }
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-256-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xffa7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0xffa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0x350a"
                }
            },
            "order": "0x3fe9ffffffffffffffffffffffffffffb154bbafb86733c966d92eded8ec7bab",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-254-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3f80ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 254
            },
            "params": {
                "a": {
                    "raw": "0x3f80fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0x367b"
                }
            },
            "order": "0xfe03fffffffffffffffffffffffffffeb95306c8bd62fb0eaf3d3fec46e98c7",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-255-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd03",
                "bits": 255
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd02"
                },
                "d": {
                    "raw": "0xea97"
                }
            },
            "order": "0x1fffffffffffffffffffffffffffffffdcf1a785eda6832eac49d1ed0436eb75",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-384-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xb0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 384
            },
            "params": {
                "a": {
                    "raw": "0xb0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0x6f17"
                }
            },
            "order": "0x2c3ffffffffffffffffffffffffffffffffffffffffffffff56d07e24e2749cd9f6b769aec80f6fe06fe4e3a6332489b",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-382-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3ffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 382
            },
            "params": {
                "a": {
                    "raw": "0x3ffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0xaf381"
                }
            },
            "order": "0xffebfffffffffffffffffffffffffffffffffffffffffffd31afaa1520dc177d8c1605c481e068269880369e5f3fa61",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-383-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5b",
                "bits": 383
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5a"
                },
                "d": {
                    "raw": "0x7fed6"
                }
            },
            "order": "0x1ffffffffffffffffffffffffffffffffffffffffffffffff1109704e73d9fbbbcd5687c9eaca2206ffebcec1ba7c81d",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-512-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xfe14ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 512
            },
            "params": {
                "a": {
                    "raw": "0xfe14fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0x12a9c"
                }
            },
            "order": "0x3f853fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfd59cdc33470d103060513f6def4d37d9af21b2b2701fa331487ecb8db605",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-510-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3eddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 510
            },
            "params": {
                "a": {
                    "raw": "0x3eddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
                },
                "d": {
                    "raw": "0x8da1e"
                }
            },
            "order": "0xfb77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7ced11e7c2f1abf716df42a6c246080b5fcc20917e59a42c85821cdf36d51b1",
            "cofactor": "0x04"
        },
        {
            "form": "TwistedEdwards",
            "name": "ed-511-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1f",
                "bits": 511
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1e"
                },
                "d": {
                    "raw": "0x10bf7d"
                }
            },
            "order": "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea7c34182e41e2e9baa930e478c489b72542706bec5f32194f7c2e8f8d142f11",
            "cofactor": "0x04"
        },
        {
            "form": "Weierstrass",
            "name": "w-256-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xffa7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0xffa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x14e6a"
                }
            },
            "order": "0xffa7fffffffffffffffffffffffffffffc517513e6e5074b9d10c5e1a79857eb",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-254-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3f80ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 254
            },
            "params": {
                "a": {
                    "raw": "0x3f80fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "-0x2f72"
                }
            },
            "order": "0x3f80ffffffffffffffffffffffffffffeb818bea0da375c06fa419c4af8df83f",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-255-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd03",
                "bits": 255
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd00"
                },
                "b": {
                    "raw": "-0x51bd"
                }
            },
            "order": "0x7fffffffffffffffffffffffffffffff864a38283ad2b3dfab8fac983c594aeb",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-384-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xb0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 384
            },
            "params": {
                "a": {
                    "raw": "0xb0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x6c96"
                }
            },
            "order": "0xb0ffffffffffffffffffffffffffffffffffffffffffffffba9b7f14ca7512537a4edcd38a7c41da29be4894b298eebb",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-382-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3ffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 382
            },
            "params": {
                "a": {
                    "raw": "0x3ffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "-0x20a72"
                }
            },
            "order": "0x3ffaffffffffffffffffffffffffffffffffffffffffffffa6eb1cff4bde214d73b321ffd8e82cd160ab86803ebb301d",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-383-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5b",
                "bits": 383
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe58"
                },
                "b": {
                    "raw": "0x17dbc"
                }
            },
            "order": "0x7fffffffffffffffffffffffffffffffffffffffffffffffa9caf814a8a116ad9fb0b4035417aaf319297fc0bb7a439f",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-512-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0xfe14ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 512
            },
            "params": {
                "a": {
                    "raw": "0xfe14fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x185ed"
                }
            },
            "order": "0xfe14ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff638a8d792ee750298064aaf0b8498e61df3d3995064ed73b939628f17e98fdc9",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-510-mont",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x3eddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 510
            },
            "params": {
                "a": {
                    "raw": "0x3eddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x988d"
                }
            },
            "order": "0x3eddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb9146ccde150ef33747ab29d1e6573d8d22de95e322303f3a00b200986fa9a2d",
            "cofactor": "0x01"
        },
        {
            "form": "Weierstrass",
            "name": "w-511-mers",
            "category": "nums",
            "desc": "Curve from https://eprint.iacr.org/2014/130.pdf. No generator present.",
            "field": {
                "type": "Prime",
                "p": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1f",
                "bits": 511
            },
            "params": {
                "a": {
                    "raw": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1c"
                },
                "b": {
                    "raw": "0x879da"
                }
            },
            "order": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8dbefa3f5ed9d839a2d4fe6ff516e87fa8d3e656a0f99fa1f0105f73b3b9d19f",
            "cofactor": "0x01"
        }
    ]
}