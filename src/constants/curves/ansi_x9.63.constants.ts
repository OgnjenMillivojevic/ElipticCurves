export const ANSI_X963 = {
    "name": "ANSI X9.63",
    "desc": "ANSI x9.63 example curves.",
    "curves": [
        {
            "form": "Weierstrass",
            "name": "ansit163k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.1",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 163,
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
                        "power": 3,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 163,
                "degree": 163,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000001"
                }
            },
            "order": "0x04000000000000000000020108a2e0cc0d99f8a5ef",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x02fe13c0537bbc11acaa07d793de4e6d5e5c94eee8"
                },
                "y": {
                    "raw": "0x0289070fb05d38ff58321f2e800536d538ccdaa3d9"
                }
            }
        },
        {
            "name": "ansit163r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.2",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 163,
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
                        "power": 3,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 163,
                "degree": 163,
                "basis": "poly"
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x07b6882caaefa84f9554ff8428bd88e246d2782ae2"
                },
                "b": {
                    "raw": "0x0713612dcddcb40aab946bda29ca91f73af958afd9"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0369979697ab43897789566789567f787a7876a654"
                },
                "y": {
                    "raw": "0x00435edb42efafb2989d51fefce3c80988f41ff883"
                }
            },
            "order": "0x03ffffffffffffffffffff48aab689c29ca710279b",
            "cofactor": "0x2",
            "aliases": [
                "secg/sect163r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit163r2",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.15",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 163,
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
                        "power": 3,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 163,
                "degree": 163,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x020a601907b8c953ca1481eb10512f78744a3205fd"
                }
            },
            "order": "0x040000000000000000000292fe77e70c12a4234c33",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x03f0eba16286a2d57ea0991168d4994637e8343e36"
                },
                "y": {
                    "raw": "0x00d51fbc6c71a0094fa2cdd545b11c5c0c797324f1"
                }
            },
            "aliases": [
                "secg/sect163r2",
                "nist/B-163"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit193r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.24",
            "field": {
                "type": "Binary",
                "bits": 193,
                "degree": 193,
                "poly": [
                    {
                        "power": 193,
                        "coeff": "0x01"
                    },
                    {
                        "power": 15,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x0017858feb7a98975169e171f77b4087de098ac8a911df7b01"
                },
                "b": {
                    "raw": "0x00fdfb49bfe6c3a89facadaa7a1e5bbc7cc1c2e5d831478814"
                }
            },
            "order": "0x01000000000000000000000000c7f34a778f443acc920eba49",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x01f481bc5f0ff84a74ad6cdf6fdef4bf6179625372d8c0c5e1"
                },
                "y": {
                    "raw": "0x0025e399f2903712ccf3ea9e3a1ad17fb0b3201b6af7ce1b05"
                }
            },
            "aliases": [
                "secg/sect193r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit193r2",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.25",
            "field": {
                "type": "Binary",
                "bits": 193,
                "degree": 193,
                "poly": [
                    {
                        "power": 193,
                        "coeff": "0x01"
                    },
                    {
                        "power": 15,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x0163f35a5137c2ce3ea6ed8667190b0bc43ecd69977702709b"
                },
                "b": {
                    "raw": "0x00c9bb9e8927d4d64c377e2ab2856a5b16e3efb7f61d4316ae"
                }
            },
            "order": "0x010000000000000000000000015aab561b005413ccd4ee99d5",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x00d9b67d192e0367c803f39e1a7e82ca14a651350aae617e8f"
                },
                "y": {
                    "raw": "0x01ce94335607c304ac29e7defbd9ca01f596f927224cdecf6c"
                }
            },
            "aliases": [
                "secg/sect193r2"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit233k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.26",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 233,
                        "coeff": "0x01"
                    },
                    {
                        "power": 74,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 233,
                "degree": 233,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "order": "0x8000000000000000000000000000069d5bb915bcd46efb1ad5f173abdf",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x017232ba853a7e731af129f22ff4149563a419c26bf50a4c9d6eefad6126"
                },
                "y": {
                    "raw": "0x01db537dece819b7f70f555a67c427a8cd9bf18aeb9b56e0c11056fae6a3"
                }
            },
            "aliases": [
                "secg/sect233k1",
                "nist/K-233",
                "wtls/wap-wsg-idm-ecid-wtls10"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit233r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.27",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 233,
                        "coeff": "0x01"
                    },
                    {
                        "power": 74,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 233,
                "degree": 233,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x0066647ede6c332c7f8c0923bb58213b333b20e9ce4281fe115f7d8f90ad"
                }
            },
            "order": "0x01000000000000000000000000000013e974e72f8a6922031d2603cfe0d7",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x00fac9dfcbac8313bb2139f1bb755fef65bc391f8b36f8f8eb7371fd558b"
                },
                "y": {
                    "raw": "0x01006a08a41903350678e58528bebf8a0beff867a7ca36716f7e01f81052"
                }
            },
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls11",
                "nist/B-233",
                "secg/sect233r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit239k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.3",
            "field": {
                "type": "Binary",
                "bits": 239,
                "degree": 239,
                "poly": [
                    {
                        "power": 239,
                        "coeff": "0x01"
                    },
                    {
                        "power": 158,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "order": "0x2000000000000000000000000000005a79fec67cb6e91f1c1da800e478a5",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x29a0b6a887a983e9730988a68727a8b2d126c44cc2cc7b2a6555193035dc"
                },
                "y": {
                    "raw": "0x76310804f12e549bdb011c103089e73510acb275fc312a5dc6b76553f0ca"
                }
            },
            "aliases": [
                "secg/sect239k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit283k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.16",
            "field": {
                "type": "Binary",
                "bits": 283,
                "degree": 283,
                "poly": [
                    {
                        "power": 283,
                        "coeff": "0x01"
                    },
                    {
                        "power": 12,
                        "coeff": "0x01"
                    },
                    {
                        "power": 7,
                        "coeff": "0x01"
                    },
                    {
                        "power": 5,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "order": "0x01ffffffffffffffffffffffffffffffffffe9ae2ed07577265dff7f94451e061e163c61",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x0503213f78ca44883f1a3b8162f188e553cd265f23c1567a16876913b0c2ac2458492836"
                },
                "y": {
                    "raw": "0x01ccda380f1c9e318d90f95d07e5426fe87e45c0e8184698e45962364e34116177dd2259"
                }
            },
            "aliases": [
                "nist/K-283",
                "secg/sect283k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit283r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.17",
            "field": {
                "type": "Binary",
                "bits": 283,
                "degree": 283,
                "poly": [
                    {
                        "power": 283,
                        "coeff": "0x01"
                    },
                    {
                        "power": 12,
                        "coeff": "0x01"
                    },
                    {
                        "power": 7,
                        "coeff": "0x01"
                    },
                    {
                        "power": 5,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x027b680ac8b8596da5a4af8a19a0303fca97fd7645309fa2a581485af6263e313b79a2f5"
                }
            },
            "order": "0x03ffffffffffffffffffffffffffffffffffef90399660fc938a90165b042a7cefadb307",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x05f939258db7dd90e1934f8c70b0dfec2eed25b8557eac9c80e2e198f8cdbecd86b12053"
                },
                "y": {
                    "raw": "0x03676854fe24141cb98fe6d4b20d02b4516ff702350eddb0826779c813f0df45be8112f4"
                }
            },
            "aliases": [
                "nist/B-283",
                "secg/sect283r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit409k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.36",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 409,
                        "coeff": "0x01"
                    },
                    {
                        "power": 87,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 409,
                "degree": 409,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "order": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffe5f83b2d4ea20400ec4557d5ed3e3e7ca5b4b5c83b8e01e5fcf",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x0060f05f658f49c1ad3ab1890f7184210efd0987e307c84c27accfb8f9f67cc2c460189eb5aaaa62ee222eb1b35540cfe9023746"
                },
                "y": {
                    "raw": "0x01e369050b7c4e42acba1dacbf04299c3460782f918ea427e6325165e9ea10e3da5f6c42e9c55215aa9ca27a5863ec48d8e0286b"
                }
            },
            "aliases": [
                "nist/K-409",
                "secg/sect409k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit409r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.37",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 409,
                        "coeff": "0x01"
                    },
                    {
                        "power": 87,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "bits": 409,
                "degree": 409,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x0021a5c2c8ee9feb5c4b9a753b7b476b7fd6422ef1f3dd674761fa99d6ac27c8a9a197b272822f6cd57a55aa4f50ae317b13545f"
                }
            },
            "order": "0x010000000000000000000000000000000000000000000000000001e2aad6a612f33307be5fa47c3c9e052f838164cd37d9a21173",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x015d4860d088ddb3496b0c6064756260441cde4af1771d4db01ffe5b34e59703dc255a868a1180515603aeab60794e54bb7996a7"
                },
                "y": {
                    "raw": "0x0061b1cfab6be5f32bbfa78324ed106a7636b9c5a7bd198d0158aa4f5488d08f38514f1fdf4b4f40d2181b3681c364ba0273c706"
                }
            },
            "aliases": [
                "nist/B-409",
                "secg/sect409r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit571k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.38",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 571,
                        "coeff": "0x01"
                    },
                    {
                        "power": 10,
                        "coeff": "0x01"
                    },
                    {
                        "power": 5,
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
                ],
                "bits": 571,
                "degree": 571,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "order": "0x020000000000000000000000000000000000000000000000000000000000000000000000131850e1f19a63e4b391a8db917f4138b630d84be5d639381e91deb45cfe778f637c1001",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x026eb7a859923fbc82189631f8103fe4ac9ca2970012d5d46024804801841ca44370958493b205e647da304db4ceb08cbbd1ba39494776fb988b47174dca88c7e2945283a01c8972"
                },
                "y": {
                    "raw": "0x0349dc807f4fbf374f4aeade3bca95314dd58cec9f307a54ffc61efc006d8a2c9d4979c0ac44aea74fbebbb9f772aedcb620b01a7ba7af1b320430c8591984f601cd4c143ef1c7a3"
                }
            },
            "aliases": [
                "nist/K-571",
                "secg/sect571k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansit571r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.39",
            "field": {
                "type": "Binary",
                "poly": [
                    {
                        "power": 571,
                        "coeff": "0x01"
                    },
                    {
                        "power": 10,
                        "coeff": "0x01"
                    },
                    {
                        "power": 5,
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
                ],
                "bits": 571,
                "degree": 571,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x02f40e7e2221f295de297117b7f3d62f5c6a97ffcb8ceff1cd6ba8ce4a9a18ad84ffabbd8efa59332be7ad6756a66e294afd185a78ff12aa520e4de739baca0c7ffeff7f2955727a"
                }
            },
            "order": "0x03ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe661ce18ff55987308059b186823851ec7dd9ca1161de93d5174d66e8382e9bb2fe84e47",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x0303001d34b856296c16c0d40d3cd7750a93d1d2955fa80aa5f40fc8db7b2abdbde53950f4c0d293cdd711a35b67fb1499ae60038614f1394abfa3b4c850d927e1e7769c8eec2d19"
                },
                "y": {
                    "raw": "0x037bf27342da639b6dccfffeb73d69d78c6c27a6009cbbca1980f8533921e8a684423e43bab08a576291af8f461bb2a8b3531d2f0485c19b16e2f1516e23dd3c1a4827af1b8ac15b"
                }
            },
            "aliases": [
                "nist/B-571",
                "secg/sect571r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip160k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.9",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffeffffac73",
                "bits": 160
            },
            "params": {
                "a": {
                    "raw": "0x0"
                },
                "b": {
                    "raw": "0x7"
                }
            },
            "order": "0x0100000000000000000001b8fa16dfab9aca16b6b3",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0x3b4c382ce37aa192a4019e763036f4f5dd4d7ebb"
                },
                "y": {
                    "raw": "0x938cf935318fdced6bc28286531733c3f03c4fee"
                }
            },
            "aliases": [
                "secg/secp160k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip160r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.8",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffff7fffffff",
                "bits": 160
            },
            "params": {
                "a": {
                    "raw": "0xffffffffffffffffffffffffffffffff7ffffffc"
                },
                "b": {
                    "raw": "0x1c97befc54bd7a8b65acf89f81d4d4adc565fa45"
                }
            },
            "order": "0x0100000000000000000001f4c8f927aed3ca752257",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0x4a96b5688ef573284664698968c38bb913cbfc82"
                },
                "y": {
                    "raw": "0x23a628553168947d59dcc912042351377ac5fb32"
                }
            },
            "aliases": [
                "secg/secp160r1",
                "wtls/wap-wsg-idm-ecid-wtls7"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip160r2",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.30",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffeffffac73",
                "bits": 160
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffeffffac70"
                },
                "b": {
                    "raw": "0xb4e134d3fb59eb8bab57274904664d5af50388ba"
                }
            },
            "order": "0x0100000000000000000000351ee786a818f3a1a16b",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0x52dcb034293a117e1f4ff11b30f7199d3144ce6d"
                },
                "y": {
                    "raw": "0xfeaffef2e331f296e071fa0df9982cfea7d43f2e"
                }
            },
            "aliases": [
                "secg/secp160r2"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip192k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.31",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffeffffee37",
                "bits": 192
            },
            "params": {
                "a": {
                    "raw": "0x0"
                },
                "b": {
                    "raw": "0x3"
                }
            },
            "order": "0xfffffffffffffffffffffffe26f2fc170f69466a74defd8d",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0xdb4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d"
                },
                "y": {
                    "raw": "0x9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
                }
            },
            "aliases": [
                "secg/secp192k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip224k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.32",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffeffffe56d",
                "bits": 224
            },
            "params": {
                "a": {
                    "raw": "0x0"
                },
                "b": {
                    "raw": "0x5"
                }
            },
            "order": "0x010000000000000000000000000001dce8d2ec6184caf0a971769fb1f7",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0xa1455b334df099df30fc28a169a467e9e47075a90f7e650eb6b7a45c"
                },
                "y": {
                    "raw": "0x7e089fed7fba344282cafbd6f7e319f7c0b0bd59e2ca4bdb556d61a5"
                }
            },
            "aliases": [
                "secg/secp224k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip224r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.33",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffff000000000000000000000001",
                "bits": 224
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffefffffffffffffffffffffffe"
                },
                "b": {
                    "raw": "0xb4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4"
                }
            },
            "order": "0xffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0xb70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21"
                },
                "y": {
                    "raw": "0xbd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34"
                }
            },
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls12",
                "nist/P-224",
                "secg/secp224r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip256k1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.10",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
                "bits": 256
            },
            "params": {
                "a": {
                    "raw": "0x0"
                },
                "b": {
                    "raw": "0x7"
                }
            },
            "order": "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                },
                "y": {
                    "raw": "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                }
            },
            "aliases": [
                "secg/secp256k1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip384r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.34",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff",
                "bits": 384
            },
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
                },
                "b": {
                    "raw": "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
                },
                "y": {
                    "raw": "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
                }
            },
            "aliases": [
                "secg/secp384r1",
                "nist/P-384"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "ansip521r1",
            "category": "x963",
            "desc": "",
            "oid": "1.3.132.0.35",
            "field": {
                "type": "Prime",
                "p": "0x01ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 521
            },
            "params": {
                "a": {
                    "raw": "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
                }
            },
            "order": "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409",
            "cofactor": "0x1",
            "generator": {
                "x": {
                    "raw": "0xc6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
                },
                "y": {
                    "raw": "0x11839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
                }
            },
            "aliases": [
                "secg/secp521r1",
                "nist/P-521"
            ]
        }
    ]
}