export const MNT = {
    "name": "Miyaji-Nakabayashi-Takano",
    "desc": "MNT (Miyaji, Nakabayashi, and Takano curves) example curves from: New explicit conditions of elliptic curve traces for FR-reduction - https://dspace.jaist.ac.jp/dspace/bitstream/10119/4432/1/73-48.pdf.",
    "curves": [
        {
            "name": "mnt1",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x26dccacc5041939206cf2b7dec50950e3c9fa4827af",
                "bits": 170
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x22ffbb20cc052993fa27dc507800b624c650e4ff3d2"
                },
                "b": {
                    "raw": "0x1c7be6fa8da953b5624efc72406af7fa77499803d08"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x25a3ae778f7ef6586abae5acde21e54b6c64edf33d0"
                },
                "y": {
                    "raw": "0x05b4ace33aa53c670ce35535d6c273698a182da557d"
                }
            },
            "order": "0x0000a60fd646ad409b3312c3b23ba64e082ad7b354d",
            "cofactor": "0x3be9",
            "characteristics": {
                "discriminant": "519081282363855507291976255149499325173130091108552",
                "j_invariant": "908761003790427908077548955758380356675829025646511",
                "trace_of_frobenius": "-52213820118540299389901413",
                "embedding_degree": "3",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3635044015161711632310195875247341545243615496026401",
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
                    },
                    {
                        "r": 7,
                        "least": 1,
                        "full": 3
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 10
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
                        "least": 18,
                        "full": 342
                    }
                ]
            }
        },
        {
            "name": "mnt2/1",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x5affffffffffff4b46081000000059bb1bf600b7",
                "bits": 159
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x3dd24a7e5c0bdfaccc215e22760469c73ee9d879"
                },
                "b": {
                    "raw": "0x478c31a992b294e19f6e4416f958646dddede5e3"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x2725af3d7dea98cb9242ac6ddb9bd89bdcf38898"
                },
                "y": {
                    "raw": "0x480b4184ed2c50c0230b4c73ca939c1b6b7f1103"
                }
            },
            "order": "0x5affffffffffff4b46081000000059bb1bf600b5",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "502795212314952730723914620087437088076350616414",
                "j_invariant": "191845423032390825713658829282439417965614485182",
                "trace_of_frobenius": "3",
                "embedding_degree": "519518160144969382386592375449686021630483366068",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "2078072640579877529546369501798744086521933464281",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 42
                    },
                    {
                        "r": 11,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 52
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
            "name": "mnt2/2",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x5affffffffffff4b46081000000059bb1bf600b7",
                "bits": 159
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x07b29491c1a02cd87844f5098d0381f6c45d6523"
                },
                "b": {
                    "raw": "0x41cc630bd66ac817d43358b108ad3d214037993c"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0d76b3e1f1ed76a282fa99575d29ff2e587049e9"
                },
                "y": {
                    "raw": "0x36e1557ed145ad409f924420e12f74a900fab054"
                }
            },
            "order": "0x5affffffffffff4b46081000000059bb1bf600b5",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "416330146701509871347454797378722894990374675389",
                "j_invariant": "327672737112578556672933546167246593305795867129",
                "trace_of_frobenius": "3",
                "embedding_degree": "519518160144969382386592375449686021630483366068",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "2078072640579877529546369501798744086521933464281",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 42
                    },
                    {
                        "r": 11,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 13,
                        "least": 4,
                        "full": 52
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
            "name": "mnt3/1",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x8afffffffffffeeb0fa77000000089f0dd49fac7",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x6d01fd0a017c62075ae999977379867e07f2a6d4"
                },
                "b": {
                    "raw": "0x7701535c00fd965341d38bba4cfbdcf9a4651825"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x1781998103c3ca14ea76b9d3a700a53e1c784789"
                },
                "y": {
                    "raw": "0x53352dde04447c25c9bb332a3c7634d3b8801f34"
                }
            },
            "order": "0x8afffffffffffeeb0fa77000000089f0dd49fac5",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "210597358905446859227534646357086406264047168945",
                "j_invariant": "15215793501150681155687505726634711188936782904",
                "trace_of_frobenius": "3",
                "embedding_degree": "793549717144513671927050677226939834588042230468",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3174198868578054687708202708907759338352168921881",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 5
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 18,
                        "full": 18
                    }
                ]
            }
        },
        {
            "name": "mnt3/2",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x8afffffffffffeeb0fa77000000089f0dd49fac7",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x5fbe0085bd2b23afcd5b9c7704aeed2bfdbe89e4"
                },
                "b": {
                    "raw": "0x3fd4005928c76d1fde3d12fa031f48c7fe7f0698"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x494e297179d42c761701ab03b2e5bca98a24dfe7"
                },
                "y": {
                    "raw": "0x3274201d6596252a780390a222e3763bbecfe5f1"
                }
            },
            "order": "0x8afffffffffffeeb0fa77000000089f0dd49fac5",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "240734167439230866925769845396196631223063598668",
                "j_invariant": "246784014257171667049093683200999942046531205936",
                "trace_of_frobenius": "3",
                "embedding_degree": "793549717144513671927050677226939834588042230468",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3174198868578054687708202708907759338352168921881",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 5
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 18,
                        "full": 18
                    }
                ]
            }
        },
        {
            "name": "mnt3/3",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0x8afffffffffffeeb0fa77000000089f0dd49fac7",
                "bits": 160
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x2ddf23acb05a91bda6ba9c20d7a584aa25075ce0"
                },
                "b": {
                    "raw": "0x1f8125c46a31e79fd6cc25298b23ab130cd22b5a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x3f710d05b65b5e16ae1b946d3fc582b16a927432"
                },
                "y": {
                    "raw": "0x4a30945c64fd7f85e148ba816005468447616b1f"
                }
            },
            "order": "0x8afffffffffffeeb0fa77000000089f0dd49fac5",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "211342184030958589211568251854333361127055241928",
                "j_invariant": "531549909386191323722269488299292998191740210015",
                "trace_of_frobenius": "3",
                "embedding_degree": "793549717144513671927050677226939834588042230468",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3174198868578054687708202708907759338352168921881",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 6,
                        "full": 6
                    },
                    {
                        "r": 11,
                        "least": 5,
                        "full": 5
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    },
                    {
                        "r": 17,
                        "least": 18,
                        "full": 18
                    }
                ]
            }
        },
        {
            "name": "mnt4",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xa2ffffffffffffffffffffffffc298b00000000000000000000005c866cf",
                "bits": 240
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x4be28760aa064734852cb4ff51ef2928a7a3cd75087c35cb1433714f7407"
                },
                "b": {
                    "raw": "0x329704eb1c042f7858c878aa369f70c5c517de4e05a823dcb8224b8a4d5a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x82556d57811807a0d7675674b3d57222cfbf9a2a2a2cd146572d7b67627e"
                },
                "y": {
                    "raw": "0x73afacea28dc870baa1d5b0bd4300ddd975e2eefc7c2db508fc2e92a8345"
                }
            },
            "order": "0xa2ffffffffffffffffffffffffc298b00000000000000000000005c866cd",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "22212718378197970123459632370220319722374785667515184443175879566492100",
                "j_invariant": "1124984654526861897351865205551134254199281270688380623003333782861539023",
                "trace_of_frobenius": "3",
                "embedding_degree": "1124984654526861897351865205551134254199281270688380623265871195502307020",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "4499938618107447589407460822204537016797125082753522493063484782009228089",
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
                        "least": 120,
                        "full": 120
                    }
                ]
            }
        },
        {
            "name": "mnt5/1",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271007",
                "bits": 240
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0xd149265d4687dcab1f2046e0947e51ac5e8e7f25916d35539d4df2e9017a"
                },
                "b": {
                    "raw": "0x489e7783a1f584712bd4f6d48cf2d1ca2c975678936e639083991c5fc369"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x1d871a744f1e02ed15d7d84abd95e80476e6307085f12dba27092ff06d60"
                },
                "y": {
                    "raw": "0x5c0c8bae9661303107b0077949dee16a7f6dde4982657b9196de23d9f9d0"
                }
            },
            "order": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271005",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "593429117302964579429108757221723198682714090669918720847187531278976024",
                "j_invariant": "440272393887005668066631560682754612404586866761175876059753922514267720",
                "trace_of_frobenius": "3",
                "embedding_degree": "1456268479172808959148733486940327264608218463421238003553122264354852868",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5825073916691235836594933947761309058432873853684952014212489057419411481",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 11,
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "mnt5/2",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271007",
                "bits": 240
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x26caaced434c5a4c2c9c1b09e0ddc167548a95516e7c81b20702485c9809"
                },
                "b": {
                    "raw": "0x6031c89e2cdd91881dbd675beac3f3df8db1b8e0f45301215a01baf56ab3"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x16e55a2ef696238a7aaf19e51b6a81e1582f28b4bcb6575ab4e0331e569b"
                },
                "y": {
                    "raw": "0x38de9844643fc9db3c568ec528983da16a177d56145a1d4bf88a2340d839"
                }
            },
            "order": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271005",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "1165886697795797508768474941606426206406384333521273560872915843944307054",
                "j_invariant": "1217230860629624462533218875960633666717430508755963349556749378716290482",
                "trace_of_frobenius": "3",
                "embedding_degree": "1456268479172808959148733486940327264608218463421238003553122264354852868",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5825073916691235836594933947761309058432873853684952014212489057419411481",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 11,
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "mnt5/3",
            "category": "mnt",
            "desc": "",
            "field": {
                "type": "Prime",
                "p": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271007",
                "bits": 240
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x44cfc0f3bc92ec82f818b443b564cf25dee3ebae7902e370f9e80283d3bd"
                },
                "b": {
                    "raw": "0x2ddfd5f7d30c9daca565cd8278eddf6e9497f27450ac97a0a69aac57e27e"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xb071579c8cc322dc7fdce378e5b539b4b7580823aba3cfdd6637cbfa0bbb"
                },
                "y": {
                    "raw": "0x15d1b75795732b1e2db1efa55cdbb19357e0aa0422cc03b442809339cf02"
                }
            },
            "order": "0xd2fffffffffffffffffffffffe9058d000000000000000000000a0271005",
            "cofactor": "0x01",
            "characteristics": {
                "discriminant": "649984036618580650517457639880809241130212612684388740651176129031894476",
                "j_invariant": "1255033703828987787697616537237266250094419551325336715616153938849047572",
                "trace_of_frobenius": "3",
                "embedding_degree": "1456268479172808959148733486940327264608218463421238003553122264354852868",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "5825073916691235836594933947761309058432873853684952014212489057419411481",
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
                        "least": 2,
                        "full": 2
                    },
                    {
                        "r": 7,
                        "least": 8,
                        "full": 8
                    },
                    {
                        "r": 11,
                        "least": 2,
                        "full": 10
                    },
                    {
                        "r": 13,
                        "least": 6,
                        "full": 12
                    }
                ]
            }
        }
    ]
}