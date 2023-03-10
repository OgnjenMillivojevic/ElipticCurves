export const BRAINPOOL = {
    "name": "Brainpool",
    "desc": "ECC Brainpool Standard Curves and Curve Generation v. 1.0  19.10.2005",
    "curves": [
        {
            "name": "brainpoolP160r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.1",
            "field": {
                "type": "Prime",
                "p": "0xe95e4a5f737059dc60dfc7ad95b3d8139515620f",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x340e7be2a280eb74e2be61bada745d97e8f7c300"
                },
                "b": {
                    "raw": "0x1e589a8595423412134faa2dbdec95c8d8675e58"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xbed5af16ea3f6a4f62938c4631eb5af7bdbcdbc3"
                },
                "y": {
                    "raw": "0x1667cb477a1a8ec338f94741669c976316da6321"
                }
            },
            "order": "0xe95e4a5f737059dc60df5991d45029409e60fc09",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "845365293605815390445478703156256339281515926196",
                "j_invariant": "387367055434500543477184371239969891945180101787",
                "trace_of_frobenius": "519972310379544251229703",
                "embedding_degree": "444099199480014958275695012943393788070980856152",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "592132265973353277700926857248628510609391551437",
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
                        "least": 12,
                        "full": 12
                    },
                    {
                        "r": 7,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 55
                    }
                ]
            }
        },
        {
            "name": "brainpoolP160t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.2",
            "field": {
                "type": "Prime",
                "p": "0xe95e4a5f737059dc60dfc7ad95b3d8139515620f",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xe95e4a5f737059dc60dfc7ad95b3d8139515620c"
                },
                "b": {
                    "raw": "0x7a556b6dae535b7b51ed2c4d7daa7a0b5c55f380"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xb199b13b9b34efc1397e64baeb05acc265ff2378"
                },
                "y": {
                    "raw": "0xadd6718b7c7c1961f0991b842443772152c9e0ad"
                }
            },
            "order": "0xe95e4a5f737059dc60df5991d45029409e60fc09",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "101000112507510591754853229447574388964119053944",
                "j_invariant": "387367055434500543477184371239969891945180101787",
                "trace_of_frobenius": "519972310379544251229703",
                "embedding_degree": "444099199480014958275695012943393788070980856152",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "592132265973353277700926857248628510609391551437",
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
                        "least": 12,
                        "full": 12
                    },
                    {
                        "r": 7,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 55
                    }
                ]
            }
        },
        {
            "name": "brainpoolP192r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.3",
            "field": {
                "type": "Prime",
                "p": "0xc302f41d932a36cda7a3463093d18db78fce476de1a86297",
                "bits": 192
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x6a91174076b1e0e19c39c031fe8685c1cae040e5c69a28ef"
                },
                "b": {
                    "raw": "0x469a28ef7c28cca3dc721d044f4496bcca7ef4146fbf25c9"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xc0a0647eaab6a48753b033c56cb0f0900a2f5c4853375fd6"
                },
                "y": {
                    "raw": "0x14b690866abd5bb88b5f4828c1490002e6773fa2fa299b8f"
                }
            },
            "order": "0xc302f41d932a36cda7a3462f9e9e916b5be8f1029ac4acc1",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "944310369424837272716401339845420116098509061277344316275",
                "j_invariant": "3145146591935622866306370409311868292910840518057952172666",
                "trace_of_frobenius": "75885465139255996133178324439",
                "embedding_degree": "597708622988270780369375236783629788514982957389979358616",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "19126675935624664971820007577303809627897222624878874449029",
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
                        "least": 120,
                        "full": 120
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 8,
                        "full": 136
                    },
                    {
                        "r": 19,
                        "least": 9,
                        "full": 171
                    }
                ]
            }
        },
        {
            "name": "brainpoolP192t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.4",
            "field": {
                "type": "Prime",
                "p": "0xc302f41d932a36cda7a3463093d18db78fce476de1a86297",
                "bits": 192
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xc302f41d932a36cda7a3463093d18db78fce476de1a86294"
                },
                "b": {
                    "raw": "0x13d56ffaec78681e68f9deb43b35bec2fb68542e27897b79"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x3ae9e58c82f63c30282e1fe7bbf43fa72c446af6f4618129"
                },
                "y": {
                    "raw": "0x97e2c5667c2223a902ab5ca449d0084b7e5b3de7ccc01c9"
                }
            },
            "order": "0xc302f41d932a36cda7a3462f9e9e916b5be8f1029ac4acc1",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "521349566141486783283143021416153571489617082425438370101",
                "j_invariant": "3145146591935622866306370409311868292910840518057952172666",
                "trace_of_frobenius": "75885465139255996133178324439",
                "embedding_degree": "597708622988270780369375236783629788514982957389979358616",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "19126675935624664971820007577303809627897222624878874449029",
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
                        "least": 120,
                        "full": 120
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 8,
                        "full": 136
                    },
                    {
                        "r": 19,
                        "least": 9,
                        "full": 171
                    }
                ]
            }
        },
        {
            "name": "brainpoolP224r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.5",
            "field": {
                "type": "Prime",
                "p": "0xd7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0ff",
                "bits": 224
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x68a5e62ca9ce6c1c299803a6c1530b514e182ad8b0042a59cad29f43"
                },
                "b": {
                    "raw": "0x2580f63ccfe44138870713b1a92369e33e2135d266dbb372386c400b"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xd9029ad2c7e5cf4340823b2a87dc68c9e4ce3174c1e6efdee12c07d"
                },
                "y": {
                    "raw": "0x58aa56f772c0726f24c6b89e4ecdac24354b9e99caa3f6d3761402cd"
                }
            },
            "order": "0xd7c134aa264366862a18302575d0fb98d116bc4b6ddebca3a5a7939f",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "14205275590849738147256021798014879924249460148276819971134307874821",
                "j_invariant": "631303702419486211765940489888844177839080623666750326568416307553",
                "trace_of_frobenius": "4460773185803614235113038911974753",
                "embedding_degree": "3786937155409058797925422999318487268761257723721792865232760161093",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "10098499081090823461134461331515967536954415864462859344966997754499",
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
            "name": "brainpoolP224t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.6",
            "field": {
                "type": "Prime",
                "p": "0xd7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0ff",
                "bits": 224
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xd7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0fc"
                },
                "b": {
                    "raw": "0x4b337d934104cd7bef271bf60ced1ed20da14c08b3bb64f18a60888d"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x6ab1e344ce25ff3896424e7ffe14762ecb49f8928ac0c76029b4d580"
                },
                "y": {
                    "raw": "0x374e9f5143e568cd23f3f4d7c0d4b1e41c8cc0d1c6abd5f1a46db4c"
                }
            },
            "order": "0xd7c134aa264366862a18302575d0fb98d116bc4b6ddebca3a5a7939f",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "8915718169748412708727830550973603735673450174737989195928269078490",
                "j_invariant": "631303702419486211765940489888844177839080623666750326568416307553",
                "trace_of_frobenius": "4460773185803614235113038911974753",
                "embedding_degree": "3786937155409058797925422999318487268761257723721792865232760161093",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "10098499081090823461134461331515967536954415864462859344966997754499",
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
            "name": "brainpoolP256r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.7",
            "field": {
                "type": "Prime",
                "p": "0xa9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5377",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7d5a0975fc2c3057eef67530417affe7fb8055c126dc5c6ce94a4b44f330b5d9"
                },
                "b": {
                    "raw": "0x26dc5c6ce94a4b44f330b5d9bbd77cbf958416295cf7e1ce6bccdc18ff8c07b6"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x8bd2aeb9cb7e57cb2c4b482ffc81b7afb9de27e1e3bd23c23a4453bd9ace3262"
                },
                "y": {
                    "raw": "0x547ef835c3dac4fd97f8461a14611dc9c27745132ded8e545c1d54c72f046997"
                }
            },
            "order": "0xa9fb57dba1eea9bc3e660a909d838d718c397aa3b561a6f7901e0e82974856a7",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "15036242490247342171513009477805930598983339216081386851174014206346325949410",
                "j_invariant": "75626560605944752908522971663649678250473810658385377252202978737957396909999",
                "trace_of_frobenius": "300418416528525664980082381967979838673",
                "embedding_degree": "38442478198522672110404873314500824546368765892207264769377759531531768179539",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "307539825588181376883238986516006596371851382387243695149962323398158084952331",
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
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 7,
                        "least": 48,
                        "full": 48
                    },
                    {
                        "r": 11,
                        "least": 10,
                        "full": 10
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
            "name": "brainpoolP256t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.8",
            "field": {
                "type": "Prime",
                "p": "0xa9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5377",
                "bits": 256
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xa9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5374"
                },
                "b": {
                    "raw": "0x662c61c430d84ea4fe66a7733d0b76b7bf93ebc4af2f49256ae58101fee92b04"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xa3e8eb3cc1cfe7b7732213b23a656149afa142c47aafbc2b79a191562e1305f4"
                },
                "y": {
                    "raw": "0x2d996c823439c56d7f7b22e14644417e69bcb6de39d027001dabe8f35b25c9be"
                }
            },
            "order": "0xa9fb57dba1eea9bc3e660a909d838d718c397aa3b561a6f7901e0e82974856a7",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "88069733320865891917912206859792533286606565385107642270399326924131494932",
                "j_invariant": "75626560605944752908522971663649678250473810658385377252202978737957396909999",
                "trace_of_frobenius": "300418416528525664980082381967979838673",
                "embedding_degree": "38442478198522672110404873314500824546368765892207264769377759531531768179539",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "307539825588181376883238986516006596371851382387243695149962323398158084952331",
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
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 7,
                        "least": 48,
                        "full": 48
                    },
                    {
                        "r": 11,
                        "least": 10,
                        "full": 10
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
            "name": "brainpoolP320r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.9",
            "field": {
                "type": "Prime",
                "p": "0xd35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e27",
                "bits": 320
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x3ee30b568fbab0f883ccebd46d3f3bb8a2a73513f5eb79da66190eb085ffa9f492f375a97d860eb4"
                },
                "b": {
                    "raw": "0x520883949dfdbc42d3ad198640688a6fe13f41349554b49acc31dccd884539816f5eb4ac8fb1f1a6"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x43bd7e9afb53d8b85289bcc48ee5bfe6f20137d10a087eb6e7871e2a10a599c710af8d0d39e20611"
                },
                "y": {
                    "raw": "0x14fdd05545ec1cc8ab4093247f77275e0743ffed117182eaa9c77877aaac6ac7d35245d1692e8ee1"
                }
            },
            "order": "0xd35e472036bc4fb7e13c785ed201e065f98fcfa5b68f12a32d482ec7ee8658e98691555b44c59311",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "1358401829173490165066196853884775272351426867124642504866990308858277224964072636606742251556422",
                "j_invariant": "358066247632993218655312856437643774447933684237000889712532007541779113891565375554334303101086",
                "trace_of_frobenius": "1829129012274291271856083956306349739816241699607",
                "embedding_degree": "1763593322239166354161909842446019520889512772717686063760686124016784784845843468355685258203920",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "7054373288956665416647639369784078083558051090876231642079567369882707391252292922642189757914501",
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
                        "least": 2,
                        "full": 4
                    }
                ]
            }
        },
        {
            "name": "brainpoolP320t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.10",
            "field": {
                "type": "Prime",
                "p": "0xd35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e27",
                "bits": 320
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xd35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e24"
                },
                "b": {
                    "raw": "0xa7f561e038eb1ed560b3d147db782013064c19f27ed27c6780aaf77fb8a547ceb5b4fef422340353"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x925be9fb01afc6fb4d3e7d4990010f813408ab106c4f09cb7ee07868cc136fff3357f624a21bed52"
                },
                "y": {
                    "raw": "0x63ba3a7a27483ebf6671dbef7abb30ebee084e58a0b077ad42a5a0989d1ee71b1b9bc0455fb0d2c3"
                }
            },
            "order": "0xd35e472036bc4fb7e13c785ed201e065f98fcfa5b68f12a32d482ec7ee8658e98691555b44c59311",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "1227797986910447087693861407896680306667211312863522948660645891506165614844254984237818878886705",
                "j_invariant": "358066247632993218655312856437643774447933684237000889712532007541779113891565375554334303101086",
                "trace_of_frobenius": "1829129012274291271856083956306349739816241699607",
                "embedding_degree": "1763593322239166354161909842446019520889512772717686063760686124016784784845843468355685258203920",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "7054373288956665416647639369784078083558051090876231642079567369882707391252292922642189757914501",
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
                        "least": 2,
                        "full": 4
                    }
                ]
            }
        },
        {
            "name": "brainpoolP384r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.11",
            "field": {
                "type": "Prime",
                "p": "0x8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec53",
                "bits": 384
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7bc382c63d8c150c3c72080ace05afa0c2bea28e4fb22787139165efba91f90f8aa5814a503ad4eb04a8c7dd22ce2826"
                },
                "b": {
                    "raw": "0x4a8c7dd22ce28268b39b55416f0447c2fb77de107dcd2a62e880ea53eeb62d57cb4390295dbc9943ab78696fa504c11"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x1d1c64f068cf45ffa2a63a81b7c13f6b8847a3e77ef14fe3db7fcafe0cbd10e8e826e03436d646aaef87b2e247d4af1e"
                },
                "y": {
                    "raw": "0x8abe1d7520f9c2a45cb1eb8e95cfd55262b70b29feec5864e19c054ff99129280e4646217791811142820341263c5315"
                }
            },
            "order": "0x8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b31f166e6cac0425a7cf3ab6af6b7fc3103b883202e9046565",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "15706321267409195131547714311286280972817133485416071074801987083215365961472833785802507452304377823439072770708055",
                "j_invariant": "3238708593163173875725998049354875763971987662971288152397580059844841553716806725943092933139820860272505955713980",
                "trace_of_frobenius": "5973228999478432667446284273866865475630836211106699249391",
                "embedding_degree": "5414817692529829043267309210583151244949029096754412150018911318705402875339628884490673779342225813057400429680985",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "brainpoolP384t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.12",
            "field": {
                "type": "Prime",
                "p": "0x8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec53",
                "bits": 384
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec50"
                },
                "b": {
                    "raw": "0x7f519eada7bda81bd826dba647910f8c4b9346ed8ccdc64e4b1abd11756dce1d2074aa263b88805ced70355a33b471ee"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x18de98b02db9a306f2afcd7235f72a819b80ab12ebd653172476fecd462aabffc4ff191b946a5f54d8d0aa2f418808cc"
                },
                "y": {
                    "raw": "0x25ab056962d30651a114afd2755ad336747f93475b7a1fca3b88f2b6a208ccfe469408584dc2b2912675bf5b9e582928"
                }
            },
            "order": "0x8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b31f166e6cac0425a7cf3ab6af6b7fc3103b883202e9046565",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "3737679651751396944816679318673518402321361287567315288737952401285446129378198042881937137830060298805293841235164",
                "j_invariant": "3238708593163173875725998049354875763971987662971288152397580059844841553716806725943092933139820860272505955713980",
                "trace_of_frobenius": "5973228999478432667446284273866865475630836211106699249391",
                "embedding_degree": "5414817692529829043267309210583151244949029096754412150018911318705402875339628884490673779342225813057400429680985",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "brainpoolP512r1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.13",
            "field": {
                "type": "Prime",
                "p": "0xaadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f3",
                "bits": 512
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7830a3318b603b89e2327145ac234cc594cbdd8d3df91610a83441caea9863bc2ded5d5aa8253aa10a2ef1c98b9ac8b57f1117a72bf2c7b9e7c1ac4d77fc94ca"
                },
                "b": {
                    "raw": "0x3df91610a83441caea9863bc2ded5d5aa8253aa10a2ef1c98b9ac8b57f1117a72bf2c7b9e7c1ac4d77fc94cadc083e67984050b75ebae5dd2809bd638016f723"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x81aee4bdd82ed9645a21322e9c4c6a9385ed9f70b5d916c1b43b62eef4d0098eff3b1f78e2d0d48d50d1687b93b97d5f7c6d5047406a5e688b352209bcb9f822"
                },
                "y": {
                    "raw": "0x7dde385d566332ecc0eabfa9cf7822fdf209f70024a57b1aa000c55b881f8111b2dcde494a5f485e5bca4bd88a2763aed1ca2b2fa8f0540678cd1e0f3ad80892"
                }
            },
            "order": "0xaadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca70330870553e5c414ca92619418661197fac10471db1d381085ddaddb58796829ca90069",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "7104545390680367735362575245212799391756304950447646185784046656533783808330053676263837968192868620640190094921262822248977297403787578048464541722920343",
                "j_invariant": "4509057370854421686186036011236846088241121285273238499519398365475754889496855834716692459441995587736488042188935834263974814230487405741844272852058903",
                "trace_of_frobenius": "133911538952573548431982907995132016398065354869678696041884562716142492272779",
                "embedding_degree": "1491493701275038758609433802526525570360434940683059085224099531200009501735569754729830288440587493309575233061671546763849035935647007328892398685924028",
                "anomalous": false,
                "supersingular": false
            }
        },
        {
            "name": "brainpoolP512t1",
            "category": "brainpool",
            "desc": "",
            "oid": "1.3.36.3.3.2.8.1.1.14",
            "field": {
                "type": "Prime",
                "p": "0xaadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f3",
                "bits": 512
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xaadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f0"
                },
                "b": {
                    "raw": "0x7cbbbcf9441cfab76e1890e46884eae321f70c0bcb4981527897504bec3e36a62bcdfa2304976540f6450085f2dae145c22553b465763689180ea2571867423e"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x640ece5c12788717b9c1ba06cbc2a6feba85842458c56dde9db1758d39c0313d82ba51735cdb3ea499aa77a7d6943a64f7a3f25fe26f06b51baa2696fa9035da"
                },
                "y": {
                    "raw": "0x5b534bd595f5af0fa2c892376c84ace1bb4e3019b71634c01131159cae03cee9d9932184beef216bd71df2dadf86a627306ecff96dbb8bace198b61e00f8b332"
                }
            },
            "order": "0xaadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca70330870553e5c414ca92619418661197fac10471db1d381085ddaddb58796829ca90069",
            "cofactor": "0x1",
            "characteristics": {
                "discriminant": "366142109299010382866812622361146894344809310498368746982237761809826581372599425766162889759353387519191323604313390132911397203950040971486611728352565",
                "j_invariant": "4509057370854421686186036011236846088241121285273238499519398365475754889496855834716692459441995587736488042188935834263974814230487405741844272852058903",
                "trace_of_frobenius": "133911538952573548431982907995132016398065354869678696041884562716142492272779",
                "embedding_degree": "1491493701275038758609433802526525570360434940683059085224099531200009501735569754729830288440587493309575233061671546763849035935647007328892398685924028",
                "anomalous": false,
                "supersingular": false
            }
        }
    ]
}