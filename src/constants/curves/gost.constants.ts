export const GOST = {
    "name": "GOST",
    "desc": "GOST R 34.10-2001: RFC5832, GOST R 34.10-2012: RFC7836",
    "curves": [
        {
            "name": "gost256",
            "category": "gost",
            "desc": "RFC5832",
            "field": {
                "type": "Prime",
                "p": "0x8000000000000000000000000000000000000000000000000000000000000431",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7"
                },
                "b": {
                    "raw": "0x5fbff498aa938ce739b8e022fbafef40563f6e6a3472fc2a514c0ce9dae23b7e"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x2"
                },
                "y": {
                    "raw": "0x8e2a8a0e65147d4bd6316030e16d19c85c97f0a9ca267122b96abbcea7e8fc8"
                }
            },
            "order": "0x8000000000000000000000000000000150fe8a1892976154c59cfc193accf5b3",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "7131076324798369740383976847735509623538161424877910620024627361000146746618",
                "j_invariant": "47600942436259896686252565464037418196133049460809434901599611094145698194061",
                "trace_of_frobenius": "-447942250905168602652181588181066248577",
                "embedding_degree": "9649340769776349618630915417390658987847155763954241770396828932022938511603",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "231584178474632390847141970017375815706987911582186296681567349604007325532741",
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
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 7,
                        "least": 2,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 10,
                        "full": 10
                    },
                    {
                        "r": 13,
                        "least": 168,
                        "full": 168
                    },
                    {
                        "r": 17,
                        "least": 288,
                        "full": 288
                    },
                    {
                        "r": 19,
                        "least": 2,
                        "full": 18
                    }
                ]
            }
        },
        {
            "name": "gost512",
            "category": "gost",
            "desc": "RFC5832",
            "field": {
                "type": "Prime",
                "p": "0x4531acd1fe0023c7550d267b6b2fee80922b14b2ffb90f04d4eb7c09b5d2d15df1d852741af4704a0458047e80e4546d35b8336fac224dd81664bbf528be6373",
                "bits": 512
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7"
                },
                "b": {
                    "raw": "0x1cff0806a31116da29d8cfa54e57eb748bc5f377e49400fdd788b649eca1ac4361834013b2ad7322480a89ca58e0cf74bc9e540c2add6897fad0a3084f302adc"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x24d19cc64572ee30f396bf6ebbfd7a6c5213b3b3d7057cc825f91093a68cd762fd60611262cd838dc6b60aa7eee804e28bc849977fac33b4b530f1b120248a9a"
                },
                "y": {
                    "raw": "0x2bb312a43bd2ce6e0d020613c857acddcfbf061e91e5f2c3f32447c259f39b2c83ab156d77f1496bf7eb3351e1ee4e43dc1a18b91b24640b6dbb92cb1add371e"
                }
            },
            "order": "0x4531acd1fe0023c7550d267b6b2fee80922b14b2ffb90f04d4eb7c09b5d2d15da82f2d7ecb1dbac719905c5eecc423f1d86e25edbe23c595d644aaf187e6e6df",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "2354030499938796080455685465248118319217198068927486418321815690157012200907763643687518461996694967111330756661917773558875004226725808279081784408642042",
                "j_invariant": "610900649669533983695054775734306011088557592049408816983490905302782604532556561056354879375964032515423415363590524121501491460792551618405795037507769",
                "trace_of_frobenius": "33317690176989408428354063686744165122149707869071609401230178415964786752661"
            }
        },
        {
            "name": "id-tc26-gost-3410-12-512-paramSetA",
            "category": "gost",
            "desc": "RFC7836",
            "field": {
                "type": "Prime",
                "p": "0x00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDC7",
                "bits": 512
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDC4"
                },
                "b": {
                    "raw": "0x00E8C2505DEDFC86DDC1BD0B2B6667F1DA34B82574761CB0E879BD081CFD0B6265EE3CB090F30D27614CB4574010DA90DD862EF9D4EBEE4761503190785A71C760"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x03"
                },
                "y": {
                    "raw": "0x7503CFE87A836AE3A61B8816E25450E6CE5E1C93ACF1ABC1778064FDCBEFA921DF1626BE4FD036E93D75E6A50E3A41E98028FE5FC235F5B889A589CB5215F2A4"
                }
            },
            "order": "0x00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF27E69532F48D89116FF22B8D4E0560609B4B38ABFAD2B85DCACDB1411F10B275",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "12198408522911213052632489093057402109612720640096098688583378894786958412526782601142507389753258425683973521245032174347351331325939929127804416473292375",
                "j_invariant": "2850514806025719070145724293578244494155992500562074285019380556682599199784707862702432619340199207468768980481671624645560499531743272474439893330387268",
                "trace_of_frobenius": "97744483583712349266929640403245629889151353128602905529915952558174263790419",
                "embedding_degree": "13407807929942597099574024998205846127479365820592393377723561443721764030073449232318290585817636498049628612556596899500625279906416653993875474742293108",
                "supersingular": false
            }
        },
        {
            "name": "id-tc26-gost-3410-12-512-paramSetB",
            "category": "gost",
            "desc": "RFC7836",
            "field": {
                "type": "Prime",
                "p": "0x008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006F",
                "bits": 512
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006C"
                },
                "b": {
                    "raw": "0x687D1B459DC841457E3E06CF6F5E2517B97C7D614AF138BCBF85DC806C4B289F3E965D2DB1416D217F8B276FAD1AB69C50F78BEE1FA3106EFB8CCBC7C5140116"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x02"
                },
                "y": {
                    "raw": "0x1A8F7EDA389B094C2C071E3647A8940F3C123B697578C213BE6DD9E6C8EC7335DCB228FD1EDF4A39152CBCAAF8C0398828041055F94CEEEC7E21340780FE41BD"
                }
            },
            "order": "0x00800000000000000000000000000000000000000000000000000000000000000149A1EC142565A545ACFDB77BD9D40CFA8B996712101BEA0EC6346C54374F25BD",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "3168251429939329401500982659836128598832488836312881941454031137145329322102983037116860271709983280267186414249706141598349259183530624792370505272178517",
                "j_invariant": "3279526492516777515918714136866447726665055949835218722150114206701277040061277147122787695822725918855580899339255833327922367669454014389888618448520937",
                "trace_of_frobenius": "-149097018916599106931901217895018650162542083271457414743815309640053273077069",
                "supersingular": false,
                "embedding_degree": "1117317327495216424964502083183820510623280485049366114810296786976813669172820430903308958031730602510485157957234261251691399803452850047142812962686538"
            }
        },
        {
            "name": "id-GostR3410-2001-CryptoPro-A-ParamSet",
            "category": "gost",
            "desc": "RFC4357",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd97",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd94"
                },
                "b": {
                    "raw": "0xa6"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x01"
                },
                "y": {
                    "raw": "0x8d91e471e0989cda27df505a453f2b7635294f2ddf23e3b122acc99c9e9f1e14"
                }
            },
            "order": "0xffffffffffffffffffffffffffffffff6c611070995ad10045841b09b761b893",
            "cofactor": "0x1"
        },
        {
            "name": "id-GostR3410-2001-CryptoPro-B-ParamSet",
            "category": "gost",
            "desc": "RFC4357",
            "field": {
                "type": "Prime",
                "p": "0x8000000000000000000000000000000000000000000000000000000000000c99",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x8000000000000000000000000000000000000000000000000000000000000c96"
                },
                "b": {
                    "raw": "0x3e1af419a269a5f866a7d3c25c3df80ae979259373ff2b182f49d4ce7e1bbc8b"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x01"
                },
                "y": {
                    "raw": "0x3fa8124359f96680b83d1c3eb2c070e5c545c9858d03ecfb744bf8d717717efc"
                }
            },
            "order": "0x800000000000000000000000000000015f700cfff1a624e5e497161bcc8a198f",
            "cofactor": "0x1"
        },
        {
            "name": "id-GostR3410-2001-CryptoPro-C-ParamSet",
            "category": "gost",
            "desc": "RFC4357",
            "field": {
                "type": "Prime",
                "p": "0x9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d759b",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d7598"
                },
                "b": {
                    "raw": "0x805a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x00"
                },
                "y": {
                    "raw": "0x41ece55743711a8c3cbf3783cd08c0ee4d4dc440d4641a8f366e550dfdb3bb67"
                }
            },
            "order": "0x9b9f605f5a858107ab1ec85e6b41c8aa582ca3511eddfb74f02f3a6598980bb9",
            "cofactor": "0x1"
        },
        {
            "name": "id-tc26-gost-3410-2012-256-paramSetA",
            "category": "gost",
            "desc": "RFC5832",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd97",
                "bits": 256
            },
            "form": "TwistedEdwards",
            "params": {
                "a": {
                    "raw": "0x01"
                },
                "d": {
                    "raw": "0x605f6b7c183fa81578bc39cfad518132b9df62897009af7e522c32d6dc7bffb"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0d"
                },
                "y": {
                    "raw": "0x60ca1e32aa475b348488c38fab07649ce7ef8dbe87f22e81f92b2592dba300e7"
                }
            },
            "order": "0x400000000000000000000000000000000fd8cddfc87b6635c115af556c360c67",
            "cofactor": "0x4"
        },
        {
            "name": "id-tc26-gost-3410-2012-512-paramSetC",
            "category": "gost",
            "desc": "RFC5832",
            "field": {
                "type": "Prime",
                "p": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc7",
                "bits": 512
            },
            "form": "TwistedEdwards",
            "params": {
                "a": {
                    "raw": "0x01"
                },
                "d": {
                    "raw": "0x9e4f5d8c017d8d9f13a5cf3cdf5bfe4dab402d54198e31ebde28a0621050439ca6b39e0a515c06b304e2ce43e79e369e91a0cfc2bc2a22b4ca302dbb33ee7550"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x12"
                },
                "y": {
                    "raw": "0x469af79d1fb1f5e16b99592b77a01e2a0fdfb0d01794368d9a56117f7b38669522dd4b650cf789eebf068c5d139732f0905622c04b2baae7600303ee73001a3d"
                }
            },
            "order": "0x3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc98cdba46506ab004c33a9ff5147502cc8eda9e7a769a12694623cef47f023ed",
            "cofactor": "0x4"
        }
    ]
}