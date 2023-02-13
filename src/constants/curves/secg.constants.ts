export const SECG = {
    "name": "SECG",
    "desc": "SEC 2: Recommended Elliptic Curve Domain Parameters version 2.0  January 27, 2010",
    "curves": [
        {
            "name": "secp112r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.6",
            "field": {
                "type": "Prime",
                "p": "0xdb7c2abf62e35e668076bead208b",
                "bits": 112
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xdb7c2abf62e35e668076bead2088"
                },
                "b": {
                    "raw": "0x659ef8ba043916eede8911702b22"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x09487239995a5ee76b55f9c2f098"
                },
                "y": {
                    "raw": "0xa89ce5af8724c0a23e0e0ff77500"
                }
            },
            "order": "0xdb7c2abf62e35e7628dfac6561c5",
            "cofactor": "0x01",
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls6"
            ],
            "characteristics": {
                "seed": "00F50B028E4D696E676875615175290472783FB1",
                "discriminant": "431641039663814096123514803737201",
                "j_invariant": "3522606870331875081851146801233610",
                "trace_of_frobenius": "-4407293269000505",
                "embedding_degree": "4451685225093714776491891542548932",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "17806740900374859092745686363194213",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 5,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 7,
                        "least": 3,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 120,
                        "full": 120
                    },
                    {
                        "r": 13,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 17,
                        "least": 8,
                        "full": 16
                    },
                    {
                        "r": 19,
                        "least": 360,
                        "full": 360
                    }
                ]
            }
        },
        {
            "name": "secp112r2",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.7",
            "field": {
                "type": "Prime",
                "p": "0xdb7c2abf62e35e668076bead208b",
                "bits": 112
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x6127c24c05f38a0aaaf65c0ef02c"
                },
                "b": {
                    "raw": "0x51def1815db5ed74fcc34c85d709"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x4ba30ab5e892b4e1649dd0928643"
                },
                "y": {
                    "raw": "0xadcd46f5882e3747def36e956e97"
                }
            },
            "order": "0x36df0aafd8b8d7597ca10520d04b",
            "cofactor": "0x04",
            "characteristics": {
                "seed": "002757A1114D696E6768756151755316C05E0BD4",
                "discriminant": "3350974381310990100142288157262754",
                "j_invariant": "1815128745141690948653052996943564",
                "trace_of_frobenius": "72213667414400864",
                "embedding_degree": "370973768757809558322577571595630",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "494631691677079417114575713327579",
                "conductor": "6",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 1,
                        "full": 1
                    },
                    {
                        "r": 3,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 3,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 10
                    },
                    {
                        "r": 13,
                        "least": 3,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 288,
                        "full": 288
                    },
                    {
                        "r": 19,
                        "least": 360,
                        "full": 360
                    }
                ]
            }
        },
        {
            "name": "secp128r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.28",
            "field": {
                "type": "Prime",
                "p": "0xfffffffdffffffffffffffffffffffff",
                "bits": 128
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffdfffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0xe87579c11079f43dd824993c2cee5ed3"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x161ff7528b899b2d0c28607ca52c5b86"
                },
                "y": {
                    "raw": "0xcf5ac8395bafeb13c02da292dded7a83"
                }
            },
            "order": "0xfffffffe0000000075a30d1b9038a115",
            "cofactor": "0x01",
            "characteristics": {
                "seed": "000E0D4D696E6768756151750CC03A4473D03679",
                "discriminant": "92269531472977194927251796133478512919",
                "j_invariant": "142488586153168470548238628993886102905",
                "trace_of_frobenius": "-8476633335676313877",
                "embedding_degree": "170141183381241069221661282790178312330",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "1361129467049928553747860362314397557009",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 120,
                        "full": 120
                    },
                    {
                        "r": 13,
                        "least": 168,
                        "full": 168
                    },
                    {
                        "r": 17,
                        "least": 4,
                        "full": 8
                    },
                    {
                        "r": 19,
                        "least": 9,
                        "full": 18
                    }
                ]
            }
        },
        {
            "name": "secp128r2",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.29",
            "field": {
                "type": "Prime",
                "p": "0xfffffffdffffffffffffffffffffffff",
                "bits": 128
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xd6031998d1b3bbfebf59cc9bbff9aee1"
                },
                "b": {
                    "raw": "0x5eeefca380d02919dc2c6558bb6d8a5d"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x7b6aa5d85e572983e6fb32a7cdebc140"
                },
                "y": {
                    "raw": "0x27b6916a894d3aee7106fe805fc34b44"
                }
            },
            "order": "0x3fffffff7fffffffbe0024720613b5a3",
            "cofactor": "0x04",
            "characteristics": {
                "seed": "004D696E67687561517512D8F03431FCE63B88F4",
                "discriminant": "296974453756101405409198998476964181399",
                "j_invariant": "194900232209907094972416409296981867603",
                "trace_of_frobenius": "19023044537425668468",
                "embedding_degree": "3866845076846387936543441905764257299",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "340282366762482138430090171110323893666",
                "conductor": "2",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 1,
                        "full": 2
                    },
                    {
                        "r": 3,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 120,
                        "full": 120
                    },
                    {
                        "r": 13,
                        "least": 3,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "secp160k1",
            "category": "secg",
            "desc": "A Koblitz curve.",
            "oid": "1.3.132.0.9",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffeffffac73",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x0000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x0000000000000000000000000000000000000007"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x3b4c382ce37aa192a4019e763036f4f5dd4d7ebb"
                },
                "y": {
                    "raw": "0x938cf935318fdced6bc28286531733c3f03c4fee"
                }
            },
            "order": "0x0100000000000000000001b8fa16dfab9aca16b6b3",
            "cofactor": "0x1",
            "aliases": [
                "x963/ansip160k1"
            ],
            "characteristics": {
                "discriminant": "1461501637330902918203684832716283019651637533123",
                "j_invariant": "0",
                "trace_of_frobenius": "-2082454586705745521609279",
                "embedding_degree": "730750818665451459101843457585434862698579581785",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5846006549323611672814741413319718784352071826443",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 2,
                        "full": 6
                    },
                    {
                        "r": 5,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 7,
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 11,
                        "least": 15,
                        "full": 15
                    },
                    {
                        "r": 13,
                        "least": 2,
                        "full": 6
                    }
                ]
            }
        },
        {
            "name": "secp160r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.8",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffff7fffffff",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xffffffffffffffffffffffffffffffff7ffffffc"
                },
                "b": {
                    "raw": "0x1c97befc54bd7a8b65acf89f81d4d4adc565fa45"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x4a96b5688ef573284664698968c38bb913cbfc82"
                },
                "y": {
                    "raw": "0x23a628553168947d59dcc912042351377ac5fb32"
                }
            },
            "order": "0x0100000000000000000001f4c8f927aed3ca752257",
            "cofactor": "0x01",
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls7",
                "x963/ansip160r1"
            ],
            "characteristics": {
                "seed": "1053CDE42C14D696E67687561517533BF3F83345",
                "discriminant": "1027266213310721979572908445837817790068480350785",
                "j_invariant": "1443800352525525475817269232308576710441299733598",
                "trace_of_frobenius": "-2364890543760230858433111",
                "embedding_degree": "1461501637330902918203687197606826779884643492438",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5846006549323611672814741695755675838845998670419",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 16,
                        "full": 16
                    },
                    {
                        "r": 11,
                        "least": 10,
                        "full": 110
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "secp160r2",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.30",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffeffffac73",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffeffffac70"
                },
                "b": {
                    "raw": "0xb4e134d3fb59eb8bab57274904664d5af50388ba"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x52dcb034293a117e1f4ff11b30f7199d3144ce6d"
                },
                "y": {
                    "raw": "0xfeaffef2e331f296e071fa0df9982cfea7d43f2e"
                }
            },
            "order": "0x0100000000000000000000351ee786a818f3a1a16b",
            "cofactor": "0x01",
            "aliases": [
                "x963/ansip160r2"
            ],
            "characteristics": {
                "seed": "B99B99B099B323E02709A4D696E6768756151751",
                "discriminant": "1237703873357928705511536972446330043119280998656",
                "j_invariant": "1027058635636405814575941827615445452503699747171",
                "trace_of_frobenius": "-250855509121001538581751",
                "embedding_degree": "730750818665451459101842541785896070326588068021",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5846006549323611672814739581720641199608088798915",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 5,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 7,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 11,
                        "least": 20,
                        "full": 20
                    }
                ]
            }
        },
        {
            "name": "secp192k1",
            "category": "secg",
            "desc": "A Koblitz curve.",
            "oid": "1.3.132.0.31",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffeffffee37",
                "bits": 192
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000003"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xdb4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d"
                },
                "y": {
                    "raw": "0x9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
                }
            },
            "order": "0xfffffffffffffffffffffffe26f2fc170f69466a74defd8d",
            "cofactor": "0x1",
            "aliases": [
                "x963/ansip192k1"
            ],
            "characteristics": {
                "discriminant": "6277101735386680763835789423207666416102355444459739537159",
                "j_invariant": "0",
                "trace_of_frobenius": "146402144145231529258894028971",
                "embedding_degree": "3138550867693340381917894711530632135978561957600422756038",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "25108406941546723055343157692684263520264190248580064135217",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 2,
                        "full": 6
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 11,
                        "least": 4,
                        "full": 4
                    },
                    {
                        "r": 13,
                        "least": 3,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "secp192r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.2.840.10045.3.1.1",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffeffffffffffffffff",
                "bits": 192
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffefffffffffffffffc"
                },
                "b": {
                    "raw": "0x64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012"
                },
                "y": {
                    "raw": "0x07192b95ffc8da78631011ed6b24cdd573f977a11e794811"
                }
            },
            "order": "0xffffffffffffffffffffffff99def836146bc9b1b4d22831",
            "cofactor": "0x1",
            "aliases": [
                "nist/P-192",
                "x962/prime192v1"
            ],
            "characteristics": {
                "seed": "3045AE6FC8422F64ED579528D38120EAE12196D5",
                "discriminant": "5525402385154848923235289274741921730185152131202286251655",
                "j_invariant": "6234286251230310114240839169629130138801351179850969208331",
                "trace_of_frobenius": "31607402316713927207482677199",
                "embedding_degree": "627710173538668076383578942317605901376719477318284228408",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "25108406941546723055343157692799058262018920874353817167917",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 5,
                        "least": 4,
                        "full": 20
                    },
                    {
                        "r": 7,
                        "least": 48,
                        "full": 48
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 55
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "secp224k1",
            "category": "secg",
            "desc": "A Koblitz curve.",
            "oid": "1.3.132.0.32",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffeffffe56d",
                "bits": 224
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000005"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xa1455b334df099df30fc28a169a467e9e47075a90f7e650eb6b7a45c"
                },
                "y": {
                    "raw": "0x7e089fed7fba344282cafbd6f7e319f7c0b0bd59e2ca4bdb556d61a5"
                }
            },
            "order": "0x10000000000000000000000000001dce8d2ec6184caf0a971769fb1f7",
            "cofactor": "0x01",
            "aliases": [
                "x963/ansip224k1"
            ],
            "characteristics": {
                "discriminant": "26959946667150639794667015087019630673637144422540572481099315264317",
                "j_invariant": "0",
                "trace_of_frobenius": "-9672873182660579502067895643393161",
                "embedding_degree": "4493324444525106632444502514503273391085054513853345758165826444713",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "107839786668602559178668060348078532367421760350741791992292904493629",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 5,
                        "least": 24,
                        "full": 24
                    },
                    {
                        "r": 7,
                        "least": 3,
                        "full": 3
                    }
                ]
            }
        },
        {
            "name": "secp224r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.3.132.0.33",
            "field": {
                "type": "Prime",
                "p": "0xffffffffffffffffffffffffffffffff000000000000000000000001",
                "bits": 224
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffefffffffffffffffffffffffe"
                },
                "b": {
                    "raw": "0xb4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xb70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21"
                },
                "y": {
                    "raw": "0xbd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34"
                }
            },
            "order": "0xffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d",
            "cofactor": "0x1",
            "aliases": [
                "nist/P-224",
                "wtls/wap-wsg-idm-ecid-wtls12",
                "x963/ansip224r1"
            ],
            "characteristics": {
                "seed": "BD71344799D5C7FCDC45B59FA3B9AB8F6A948BC5",
                "discriminant": "8133954887115844930654026312464158747844254983800706208418026371607",
                "j_invariant": "20781977079628996477063007379734849057519732242287194936686605794677",
                "trace_of_frobenius": "4733100108545601916421827343930821",
                "embedding_degree": "8986648889050213264889005029006541980152602571474797240560907456020",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "107839786668602559178668060348078517961131556494503316152212921264703",
                "conductor": "1",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 5,
                        "least": 6,
                        "full": 6
                    }
                ]
            }
        },
        {
            "name": "secp256k1",
            "category": "secg",
            "desc": "A Koblitz curve.",
            "oid": "1.3.132.0.10",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x0000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x0000000000000000000000000000000000000000000000000000000000000007"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                },
                "y": {
                    "raw": "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                }
            },
            "order": "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "cofactor": "0x1",
            "aliases": [
                "x963/ansip256k1"
            ],
            "characteristics": {
                "discriminant": "115792089237316195423570985008687907853269984665640564039457584007908834650495",
                "j_invariant": "0",
                "trace_of_frobenius": "432420386565659656852420866390673177327",
                "embedding_degree": "19298681539552699237261830834781317975472927379845817397100860523586360249056",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "2058526030885621251974595289043340584056211192337762651115457400734420735597",
                "conductor": "15",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    }
                ]
            }
        },
        {
            "name": "secp256r1",
            "category": "secg",
            "desc": "A randomly generated curve. [SEC2v1](https://www.secg.org/SEC2-Ver-1.0.pdf) states 'E was chosen verifiably at random as specified in ANSI X9.62 [1] from the seed'.",
            "oid": "1.2.840.10045.3.1.7",
            "field": {
                "type": "Prime",
                "p": "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
                },
                "y": {
                    "raw": "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
                }
            },
            "order": "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",
            "cofactor": "0x1",
            "aliases": [
                "nist/P-256",
                "x962/prime256v1"
            ],
            "characteristics": {
                "seed": "C49D360886E704936A6678E1139D26B7819F7E90",
                "discriminant": "47064476442213300654454205837611899485069387829947879813735601543372794627813",
                "j_invariant": "7958909377132088453074743217357398615041065282494610304372115906626967530147",
                "trace_of_frobenius": "89188191154553853111372247798585809583",
                "embedding_degree": "38597363070118749587565815649802524509998985074711920114140753020356170681456",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "51463150760158332783421087533070032680028376163334078103224794776407756178469",
                "conductor": "3",
                "torsion_degrees": [
                    {
                        "r": 2,
                        "least": 3,
                        "full": 3
                    },
                    {
                        "r": 3,
                        "least": 2,
                        "full": 6
                    },
                    {
                        "r": 5,
                        "least": 2,
                        "full": 10
                    }
                ]
            }
        },
        {
            "name": "secp384r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.34",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff",
                "bits": 384
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
                },
                "b": {
                    "raw": "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
                },
                "y": {
                    "raw": "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973",
            "cofactor": "0x1",
            "aliases": [
                "nist/P-384",
                "x963/ansip384r1"
            ],
            "characteristics": {
                "seed": "A335926AA319A27A1D00896A6773A4827ACDAC73",
                "discriminant": "38275261264050278989862136034342276004573039492779555073863190029182890449044186682105480613137214197175883602718257",
                "j_invariant": "12550029517991417762405079599420518784762671286028430215113399824456742172589190955698027499893480133182923443701083",
                "trace_of_frobenius": "1388124618062372383606759648309780106643088307173319169677"
            }
        },
        {
            "name": "secp521r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.35",
            "field": {
                "type": "Prime",
                "p": "0x01ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "bits": 521
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
                },
                "b": {
                    "raw": "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
                },
                "y": {
                    "raw": "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
                }
            },
            "order": "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409",
            "cofactor": "0x1",
            "aliases": [
                "nist/P-521",
                "x963/ansip521r1"
            ],
            "characteristics": {
                "seed": "D09E8800291CB85396CC6717393284AAA0DA64BA",
                "discriminant": "2687853087729004331535582886185403114835754464152651523509230634031161977750238608042000458607319784141115468556368066113806987449553072575343372028907331922",
                "j_invariant": "3619090631887053412807272747807643016060282478111249168973675223587770705025281286979867546071268566958111997954788345609183745222693618155278831649044785613",
                "trace_of_frobenius": "657877501894328237357444332315020117536923257219387276263472201219398408051703"
            }
        },
        {
            "form": "Weierstrass",
            "name": "sect113r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.4",
            "field": {
                "type": "Binary",
                "bits": 113,
                "poly": [
                    {
                        "power": 113,
                        "coeff": "0x01"
                    },
                    {
                        "power": 9,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "degree": 113,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x003088250ca6e7c7fe649ce85820f7"
                },
                "b": {
                    "raw": "0x00e8bee4d3e2260744188be0e9c723"
                }
            },
            "order": "0x0100000000000000d9ccec8a39e56f",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x009d73616f35f4ab1407d73562c10f"
                },
                "y": {
                    "raw": "0x00a52830277958ee84d1315ed31886"
                }
            },
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls4"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "sect113r2",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.5",
            "field": {
                "type": "Binary",
                "bits": 113,
                "poly": [
                    {
                        "power": 113,
                        "coeff": "0x01"
                    },
                    {
                        "power": 9,
                        "coeff": "0x01"
                    },
                    {
                        "power": 0,
                        "coeff": "0x01"
                    }
                ],
                "degree": 113,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x00689918dbec7e5a0dd6dfc0aa55c7"
                },
                "b": {
                    "raw": "0x0095e9a9ec9b297bd4bf36e059184f"
                }
            },
            "order": "0x010000000000000108789b2496af93",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x01a57a6a7b26ca5ef52fcdb8164797"
                },
                "y": {
                    "raw": "0x00b3adc94ed1fe674c06e695baba1d"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "sect131r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.22",
            "field": {
                "type": "Binary",
                "bits": 131,
                "poly": [
                    {
                        "power": 131,
                        "coeff": "0x01"
                    },
                    {
                        "power": 8,
                        "coeff": "0x01"
                    },
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
                ],
                "degree": 131,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x07a11b09a76b562144418ff3ff8c2570b8"
                },
                "b": {
                    "raw": "0x0217c05610884b63b9c6c7291678f9d341"
                }
            },
            "order": "0x0400000000000000023123953a9464b54d",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x0081baf91fdf9833c40f9c181343638399"
                },
                "y": {
                    "raw": "0x078c6e7ea38c001f73c8134b1b4ef9e150"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "sect131r2",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.23",
            "field": {
                "type": "Binary",
                "bits": 131,
                "poly": [
                    {
                        "power": 131,
                        "coeff": "0x01"
                    },
                    {
                        "power": 8,
                        "coeff": "0x01"
                    },
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
                ],
                "degree": 131,
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x03e5a88919d7cafcbf415f07c2176573b2"
                },
                "b": {
                    "raw": "0x04b8266a46c55657ac734ce38f018f2192"
                }
            },
            "order": "0x0400000000000000016954a233049ba98f",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x0356dcd8f2f95031ad652d23951bb366a8"
                },
                "y": {
                    "raw": "0x0648f06d867940a5366d9e265de9eb240f"
                }
            }
        },
        {
            "name": "sect163k1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x02fe13c0537bbc11acaa07d793de4e6d5e5c94eee8"
                },
                "y": {
                    "raw": "0x0289070fb05d38ff58321f2e800536d538ccdaa3d9"
                }
            },
            "order": "0x04000000000000000000020108a2e0cc0d99f8a5ef",
            "cofactor": "0x2",
            "aliases": [
                "nist/K-163",
                "x963/ansit163k1",
                "wtls/wap-wsg-idm-ecid-wtls3"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "-4845466632539410776804317",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "46768052394588893382517919492387689168400618179549",
                "conductor": "1"
            }
        },
        {
            "name": "sect163r1",
            "category": "secg",
            "desc": "A randomly generated curve, using the SECG/X9.62 method. 'However for historical reasons the method used to generate E from S differs slightly from the method described in ANSI X9.62 [X9.62]. Specifically the coefficient b produced from S is the reverse of the coefficient that would have been produced by the method described in ANSI X9.62.'",
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
                "x963/ansit163r1"
            ],
            "characteristics": {
                "seed": "24B7B137C8A14D696E6768756151756FD0DA2E5C",
                "discriminant": "10341149448350347985759700389662805134872097107929",
                "j_invariant": "6799963281606188757260601154353010573009354190197",
                "trace_of_frobenius": "1731532666194638619521227",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "46768052394588893382517912915388390434351221854005",
                "conductor": "1"
            }
        },
        {
            "name": "sect163r2",
            "category": "secg",
            "desc": "A randomly generated curve. 'E was selected from S as specified in ANSI X9.62 [X9.62] in normal basis representation and converted into polynomial basis representation.'",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x020a601907b8c953ca1481eb10512f78744a3205fd"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x03f0eba16286a2d57ea0991168d4994637e8343e36"
                },
                "y": {
                    "raw": "0x00d51fbc6c71a0094fa2cdd545b11c5c0c797324f1"
                }
            },
            "order": "0x040000000000000000000292fe77e70c12a4234c33",
            "cofactor": "0x2",
            "aliases": [
                "nist/B-163",
                "x963/ansit163r2"
            ],
            "characteristics": {
                "seed": "85E25BFE5C86226CDB12016F7553F9D0E693A268",
                "discriminant": "2982236234343851336267446656627785008148015875581",
                "j_invariant": "924715273381456531451948543458511393546700947074",
                "trace_of_frobenius": "-6224022517221266226059365",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "46768052394588893382517920870943573850256067434597",
                "conductor": "1"
            }
        },
        {
            "form": "Weierstrass",
            "name": "sect193r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.24",
            "field": {
                "type": "Binary",
                "bits": 193,
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
                "degree": 193,
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
                "x963/ansit193r1"
            ]
        },
        {
            "form": "Weierstrass",
            "name": "sect193r2",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.25",
            "field": {
                "type": "Binary",
                "bits": 193,
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
                "degree": 193,
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
                "x963/ansit193r2"
            ]
        },
        {
            "name": "sect233k1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x017232ba853a7e731af129f22ff4149563a419c26bf50a4c9d6eefad6126"
                },
                "y": {
                    "raw": "0x01db537dece819b7f70f555a67c427a8cd9bf18aeb9b56e0c11056fae6a3"
                }
            },
            "order": "0x8000000000000000000000000000069d5bb915bcd46efb1ad5f173abdf",
            "cofactor": "0x4",
            "aliases": [
                "nist/K-233",
                "wtls/wap-wsg-idm-ecid-wtls10",
                "x963/ansit233k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "-137381546011108235394987299651366779",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "sect233r1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x0066647ede6c332c7f8c0923bb58213b333b20e9ce4281fe115f7d8f90ad"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x00fac9dfcbac8313bb2139f1bb755fef65bc391f8b36f8f8eb7371fd558b"
                },
                "y": {
                    "raw": "0x01006a08a41903350678e58528bebf8a0beff867a7ca36716f7e01f81052"
                }
            },
            "order": "0x01000000000000000000000000000013e974e72f8a6922031d2603cfe0d7",
            "cofactor": "0x2",
            "aliases": [
                "nist/B-233",
                "wtls/wap-wsg-idm-ecid-wtls11",
                "x963/ansit233r1"
            ],
            "characteristics": {
                "seed": "74D59FF07F6B413D0EA14B344B20A2DB049B50C3",
                "discriminant": "2760497980029204187078845502377898520307707256259003964398570147123373",
                "j_invariant": "4307676474001897771242333711874131057278497100044075715856582737706846",
                "trace_of_frobenius": "-206777407530349254000433718821372333",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "6134885641591612255497560766468467091820697700856927382414879179085189",
                "conductor": "3"
            }
        },
        {
            "name": "sect239k1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.3",
            "field": {
                "type": "Binary",
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
                "bits": 239,
                "degree": 239,
                "basis": "poly"
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x29a0b6a887a983e9730988a68727a8b2d126c44cc2cc7b2a6555193035dc"
                },
                "y": {
                    "raw": "0x76310804f12e549bdb011c103089e73510acb275fc312a5dc6b76553f0ca"
                }
            },
            "order": "0x2000000000000000000000000000005a79fec67cb6e91f1c1da800e478a5",
            "cofactor": "0x4",
            "aliases": [
                "x963/ansit239k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "-1879124296849029916489117776215138963",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3533694129556768659166595001485837033534092090600267832732330178800378515",
                "conductor": "1"
            }
        },
        {
            "name": "sect283k1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.16",
            "field": {
                "type": "Binary",
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
                "bits": 283,
                "degree": 283,
                "basis": "poly"
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0503213f78ca44883f1a3b8162f188e553cd265f23c1567a16876913b0c2ac2458492836"
                },
                "y": {
                    "raw": "0x01ccda380f1c9e318d90f95d07e5426fe87e45c0e8184698e45962364e34116177dd2259"
                }
            },
            "order": "0x01ffffffffffffffffffffffffffffffffffe9ae2ed07577265dff7f94451e061e163c61",
            "cofactor": "0x4",
            "aliases": [
                "nist/K-283",
                "x963/ansit283k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "7777244870872830999287791970962823977569917",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "62165404551223330269422781018352605012557011072423593807226997823852966163742694371715",
                "conductor": "1"
            }
        },
        {
            "name": "sect283r1",
            "category": "secg",
            "desc": "",
            "oid": "1.3.132.0.17",
            "field": {
                "type": "Binary",
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
                "bits": 283,
                "degree": 283,
                "basis": "poly"
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x027b680ac8b8596da5a4af8a19a0303fca97fd7645309fa2a581485af6263e313b79a2f5"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x05f939258db7dd90e1934f8c70b0dfec2eed25b8557eac9c80e2e198f8cdbecd86b12053"
                },
                "y": {
                    "raw": "0x03676854fe24141cb98fe6d4b20d02b4516ff702350eddb0826779c813f0df45be8112f4"
                }
            },
            "order": "0x03ffffffffffffffffffffffffffffffffffef90399660fc938a90165b042a7cefadb307",
            "cofactor": "0x2",
            "aliases": [
                "nist/B-283",
                "x963/ansit283r1"
            ],
            "characteristics": {
                "seed": "77E2B07370EB0F832A6DD5B62DFC88CD06BB84BE",
                "discriminant": "4821813576056072374006997780399081180312270030300601270120450341205914644378616963829",
                "j_invariant": "627751430426462883238147702498843470781790640735057151432982237133924095803873168483",
                "trace_of_frobenius": "2863663306391796106224371145726066910599667",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "62165404551223330269422781018352605012557015986005158288261890887273791400499761341965",
                "conductor": "1"
            }
        },
        {
            "name": "sect409k1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0060f05f658f49c1ad3ab1890f7184210efd0987e307c84c27accfb8f9f67cc2c460189eb5aaaa62ee222eb1b35540cfe9023746"
                },
                "y": {
                    "raw": "0x01e369050b7c4e42acba1dacbf04299c3460782f918ea427e6325165e9ea10e3da5f6c42e9c55215aa9ca27a5863ec48d8e0286b"
                }
            },
            "order": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffe5f83b2d4ea20400ec4557d5ed3e3e7ca5b4b5c83b8e01e5fcf",
            "cofactor": "0x4",
            "aliases": [
                "nist/K-409",
                "x963/ansit409k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "10457288737315625927447685387048320737638796957687575791173829",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "sect409r1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x0021a5c2c8ee9feb5c4b9a753b7b476b7fd6422ef1f3dd674761fa99d6ac27c8a9a197b272822f6cd57a55aa4f50ae317b13545f"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x015d4860d088ddb3496b0c6064756260441cde4af1771d4db01ffe5b34e59703dc255a868a1180515603aeab60794e54bb7996a7"
                },
                "y": {
                    "raw": "0x0061b1cfab6be5f32bbfa78324ed106a7636b9c5a7bd198d0158aa4f5488d08f38514f1fdf4b4f40d2181b3681c364ba0273c706"
                }
            },
            "order": "0x010000000000000000000000000000000000000000000000000001e2aad6a612f33307be5fa47c3c9e052f838164cd37d9a21173",
            "cofactor": "0x2",
            "aliases": [
                "nist/B-409",
                "x963/ansit409r1"
            ],
            "characteristics": {
                "seed": "4099B5A457F9D69F79213D094C4BCD4D4262210B",
                "discriminant": "86886261634090707672817770640384425264505829479043641824438658614111870471004564988634410809058207142318571212147935892575",
                "j_invariant": "754296572979130966367055702570030140076184810784727299570664029563208238737796673624760610953546729716274009429339787708937",
                "trace_of_frobenius": "-6059503967182126918765909026644927652236777310526686418445029",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "sect571k1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x026eb7a859923fbc82189631f8103fe4ac9ca2970012d5d46024804801841ca44370958493b205e647da304db4ceb08cbbd1ba39494776fb988b47174dca88c7e2945283a01c8972"
                },
                "y": {
                    "raw": "0x0349dc807f4fbf374f4aeade3bca95314dd58cec9f307a54ffc61efc006d8a2c9d4979c0ac44aea74fbebbb9f772aedcb620b01a7ba7af1b320430c8591984f601cd4c143ef1c7a3"
                }
            },
            "order": "0x020000000000000000000000000000000000000000000000000000000000000000000000131850e1f19a63e4b391a8db917f4138b630d84be5d639381e91deb45cfe778f637c1001",
            "cofactor": "0x4",
            "aliases": [
                "nist/K-571",
                "x963/ansit571k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "-148380926981691413899619140297051490364542574180493936232912339534208516828973111459843",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "sect571r1",
            "category": "secg",
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
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x02f40e7e2221f295de297117b7f3d62f5c6a97ffcb8ceff1cd6ba8ce4a9a18ad84ffabbd8efa59332be7ad6756a66e294afd185a78ff12aa520e4de739baca0c7ffeff7f2955727a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0303001d34b856296c16c0d40d3cd7750a93d1d2955fa80aa5f40fc8db7b2abdbde53950f4c0d293cdd711a35b67fb1499ae60038614f1394abfa3b4c850d927e1e7769c8eec2d19"
                },
                "y": {
                    "raw": "0x037bf27342da639b6dccfffeb73d69d78c6c27a6009cbbca1980f8533921e8a684423e43bab08a576291af8f461bb2a8b3531d2f0485c19b16e2f1516e23dd3c1a4827af1b8ac15b"
                }
            },
            "order": "0x03ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe661ce18ff55987308059b186823851ec7dd9ca1161de93d5174d66e8382e9bb2fe84e47",
            "cofactor": "0x2",
            "aliases": [
                "nist/B-571",
                "x963/ansit571r1"
            ],
            "characteristics": {
                "seed": "2AA058F73A0E33AB486B0F610410C53A7F132310",
                "discriminant": "2853329245261343535560086964181551296889298776106832980891560850944180011701123307905326019642652653533003482753023669016842884108172514870944140611113679225347419720217210",
                "j_invariant": "4214501753546941913223695905024629172637342244349568219783929342383426637975668846684512012478218604779111370893214803288669006084397110899225485839234972840008396689070376",
                "trace_of_frobenius": "99534385013609758659469819150465382236412396452349171016760770327496674607579419075443",
                "anomalous": false,
                "supersingular": false
            }
        }
    ]
}