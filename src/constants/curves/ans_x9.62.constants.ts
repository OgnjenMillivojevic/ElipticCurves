export const ANSI_x962 = {
    "name": "ANSI x9.62",
    "desc": "ANSI x9.62 example curves.",
    "curves": [
        {
            "name": "prime192v1",
            "category": "x962",
            "desc": "",
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
                "secg/secp192r1",
                "nist/P-192"
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
            "name": "prime192v2",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.1.2",
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
                    "raw": "0xcc22d6dfb95c6b25e49c0d6364a4e5980c393aa21668d953"
                }
            },
            "generator": {
                "x": {
                    "raw": "0xeea2bae7e1497842f2de7769cfe9c989c072ad696f48034a"
                },
                "y": {
                    "raw": "0x6574d11d69b6ec7a672bb82a083df2f2b0847de970b2de15"
                }
            },
            "order": "0xfffffffffffffffffffffffe5fb1a724dc80418648d8dd31",
            "cofactor": "0x1",
            "characteristics": {
                "seed": "31A92EE2029FD10D901B113E990710F0D21AC6B6",
                "discriminant": "3136318742261921876063208570368096687049382158828912127687",
                "j_invariant": "2188073006583539552141688552564683396860111048461359479401",
                "trace_of_frobenius": "128840479891808162805939905231",
                "embedding_degree": "1569275433846670190958947355769706484048025134396096264012",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "25108406941546723055343157692701825184443826638755359939885",
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
                        "least": 2,
                        "full": 6
                    }
                ]
            }
        },
        {
            "name": "prime192v3",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.1.3",
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
                    "raw": "0x22123dc2395a05caa7423daeccc94760a7d462256bd56916"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x7d29778100c65a1da1783716588dce2b8b4aee8e228f1896"
                },
                "y": {
                    "raw": "0x38a90f22637337334b49dcb66a6dc8f9978aca7648a943b0"
                }
            },
            "order": "0xffffffffffffffffffffffff7a62d031c83f4294f640ec13",
            "cofactor": "0x1",
            "characteristics": {
                "seed": "C469684435DEB378C4B65CA9591E2A5763059A2E",
                "discriminant": "3779502969702448100548644654746965771458990594820505358394",
                "j_invariant": "4949518941300124932197833942361144997943533558142111060080",
                "trace_of_frobenius": "41351533396743040039645025261",
                "embedding_degree": "1046183622564446793972631570527719147114527610058446656003",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "25108406941546723055343157692789314130938891761521654819855",
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
                    }
                ]
            }
        },
        {
            "name": "prime239v1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.1.4",
            "field": {
                "type": "Prime",
                "p": "0x7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff",
                "bits": 239
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc"
                },
                "b": {
                    "raw": "0x6b016c3bdcf18941d0d654921475ca71a9db2fb27d1d37796185c2942c0a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x0ffa963cdca8816ccc33b8642bedf905c3d358573d3f27fbbd3b3cb9aaaf"
                },
                "y": {
                    "raw": "0x7debe8e4e90a5dae6e4054ca530ba04654b36818ce226b39fccb7b02f1ae"
                }
            },
            "order": "0x7fffffffffffffffffffffff7fffff9e5e9a9f5d9071fbd1522688909d0b",
            "cofactor": "0x1",
            "characteristics": {
                "seed": "E43BB460F0B80CC0C0B075798E948060F8321B7D",
                "discriminant": "304850035712828017768890753913370930082366291391142991141919368057646026",
                "j_invariant": "535250236995642411828071436390811255989556058215461384191615097928272770",
                "trace_of_frobenius": "506926255561332610517105435906892533",
                "embedding_degree": "441711766194596082395824375180154442403775170845813876137672712351403653",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3533694129556768659166595001441235540750980133450508840652698006531906823",
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
                        "least": 12,
                        "full": 12
                    }
                ]
            }
        },
        {
            "name": "prime239v2",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.1.5",
            "field": {
                "type": "Prime",
                "p": "0x7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff",
                "bits": 239
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc"
                },
                "b": {
                    "raw": "0x617fab6832576cbbfed50d99f0249c3fee58b94ba0038c7ae84c8c832f2c"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x38af09d98727705120c921bb5e9e26296a3cdcf2f35757a0eafd87b830e7"
                },
                "y": {
                    "raw": "0x5b0125e4dbea0ec7206da0fc01d9b081329fb555de6ef460237dff8be4ba"
                }
            },
            "order": "0x7fffffffffffffffffffffff800000cfa7e8594377d414c03821bc582063",
            "cofactor": "0x1",
            "characteristics": {
                "seed": "0E8B4011604095303CA3B8099982BE09FCB9AE616",
                "discriminant": "369528448271621828801750954737572264864367402255299013074552698823670735",
                "j_invariant": "845456799438304440285632276028937020105084947748076550483955832603378212",
                "trace_of_frobenius": "-1078211060294033492355314871841595491",
                "embedding_degree": "21033893628314099161705922627626402056968753751118901313042041248840365",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "3533694129556768659166595001441235542336117449305874943525118314280394847"
            }
        },
        {
            "name": "prime239v3",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.1.6",
            "field": {
                "type": "Prime",
                "p": "0x7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff",
                "bits": 239
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc"
                },
                "b": {
                    "raw": "0x255705fa2a306654b1f4cb03d6a750a30c250102d4988717d9ba15ab6d3e"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x6768ae8e18bb92cfcf005c949aa2c6d94853d0e660bbf854b1c9505fe95a"
                },
                "y": {
                    "raw": "0x1607e6898f390c06bc1d552bad226f3b6fcfe48b6e818499af18e3ed6cf3"
                }
            },
            "order": "0x7fffffffffffffffffffffff7fffff975deb41b3a6057c3c432146526551",
            "cofactor": "0x1",
            "characteristics": {
                "seed": "7D7374168FFE3471B60A857686A19475D3BFA2FF",
                "discriminant": "882873045738548432559077267776614981148556437256582152685457545366799895",
                "j_invariant": "753745430086077892322271754405460844839460634669491132164952757184512889",
                "trace_of_frobenius": "543286227487037812274483689551665839"
            }
        },
        {
            "name": "prime256v1",
            "category": "x962",
            "desc": "",
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
                "secg/secp256r1",
                "nist/P-256"
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
                    },
                    {
                        "r": 7,
                        "least": 16,
                        "full": 16
                    }
                ]
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb176w1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.4",
            "field": {
                "type": "Binary",
                "bits": 176,
                "degree": 176,
                "poly": [
                    {
                        "power": 176,
                        "coeff": "0x01"
                    },
                    {
                        "power": 43,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0xe4e6db2995065c407d9d39b8d0967b96704ba8e9c90b"
                },
                "b": {
                    "raw": "0x5dda470abe6414de8ec133ae28e9bbd7fcec0ae0fff2"
                }
            },
            "order": "0x010092537397eca4f6145799d62b0a19ce06fe26ad",
            "cofactor": "0xff6e",
            "generator": {
                "x": {
                    "raw": "0x8d16c2866798b600f9f08bb4a8e860f3298ce04a5798"
                },
                "y": {
                    "raw": "0x6fa4539c2dadddd6bab5167d61b436e1d92bb16a562c"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb163v1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.1",
            "field": {
                "type": "Binary",
                "bits": 163,
                "degree": 163,
                "poly": [
                    {
                        "power": 163,
                        "coeff": "0x01"
                    },
                    {
                        "power": 8,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0x072546b5435234a422e0789675f432c89435de5242"
                },
                "b": {
                    "raw": "0x00c9517d06d5240d3cff38c74b20b6cd4d6f9dd4d9"
                }
            },
            "order": "0x0400000000000000000001e60fc8821cc74daeafc1",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x07af69989546103d79329fcc3d74880f33bbe803cb"
                },
                "y": {
                    "raw": "0x01ec23211b5966adea1d3f87f7ea5848aef0b7ca9f"
                }
            },
            "aliases": [
                "wtls/wap-wsg-idm-ecid-wtls5"
            ],
            "characteristics": {
                "seed": "D2C0FB15760860DEF1EEF4D696E6768756151754"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb163v2",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.2",
            "field": {
                "type": "Binary",
                "bits": 163,
                "degree": 163,
                "poly": [
                    {
                        "power": 163,
                        "coeff": "0x01"
                    },
                    {
                        "power": 8,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0x0108b39e77c4b108bed981ed0e890e117c511cf072"
                },
                "b": {
                    "raw": "0x0667aceb38af4e488c407433ffae4f1c811638df20"
                }
            },
            "order": "0x03fffffffffffffffffffdf64de1151adbb78f10a7",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x0024266e4eb5106d0a964d92c4860e2671db9b6cc5"
                },
                "y": {
                    "raw": "0x079f684ddf6684c5cd258b3890021b2386dfd19fc5"
                }
            },
            "characteristics": {
                "seed": "53814C050D44D696E67687561517580CA4E29FFD"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb163v3",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.3",
            "field": {
                "type": "Binary",
                "bits": 163,
                "degree": 163,
                "poly": [
                    {
                        "power": 163,
                        "coeff": "0x01"
                    },
                    {
                        "power": 8,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0x07a526c63d3e25a256a007699f5447e32ae456b50e"
                },
                "b": {
                    "raw": "0x03f7061798eb99e238fd6f1bf95b48feeb4854252b"
                }
            },
            "order": "0x03fffffffffffffffffffe1aee140f110aff961309",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x2f9f87b7c574d0bdecf8a22e6524775f98cdebdcb"
                },
                "y": {
                    "raw": "0x5b935590c155e17ea48eb3ff3718b893df59a05d0"
                }
            },
            "characteristics": {
                "seed": "50CBF1D95CA94D696E676875615175F16A36A3B8"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb208w1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.10",
            "field": {
                "type": "Binary",
                "bits": 208,
                "degree": 208,
                "poly": [
                    {
                        "power": 208,
                        "coeff": "0x01"
                    },
                    {
                        "power": 83,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0x0"
                },
                "b": {
                    "raw": "0xc8619ed45a62e6212e1160349e2bfa844439fafc2a3fd1638f9e"
                }
            },
            "order": "0x0101baf95c9723c57b6c21da2eff2d5ed588bdd5717e212f9d",
            "cofactor": "0xfe48",
            "generator": {
                "x": {
                    "raw": "0x89fdfbe4abe193df9559ecf07ac0ce78554e2784eb8c1ed1a57a"
                },
                "y": {
                    "raw": "0x0f55b51a06e78e9ac38a035ff520d8b01781beb1a6bb08617de3"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb191v3",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.7",
            "field": {
                "type": "Binary",
                "bits": 191,
                "degree": 191,
                "poly": [
                    {
                        "power": 191,
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
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x6c01074756099122221056911c77d77e77a777e7e7e77fcb"
                },
                "b": {
                    "raw": "0x71fe1af926cf847989efef8db459f66394d90f32ad3f15e8"
                }
            },
            "order": "0x155555555555555555555555610c0b196812bfb6288a3ea3",
            "cofactor": "0x6",
            "generator": {
                "x": {
                    "raw": "0x375d4ce24fde434489de8746e71786015009e66e38a926dd"
                },
                "y": {
                    "raw": "0x545a39176196575d985999366e6ad34ce0a77cd7127b06be"
                }
            },
            "characteristics": {
                "seed": "E053512DC684D696E676875615175067AE786D1F"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb191v2",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.6",
            "field": {
                "type": "Binary",
                "bits": 191,
                "degree": 191,
                "poly": [
                    {
                        "power": 191,
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
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x401028774d7777c7b7666d1366ea432071274f89ff01e718"
                },
                "b": {
                    "raw": "0x0620048d28bcbd03b6249c99182b7c8cd19700c362c46a01"
                }
            },
            "order": "0x20000000000000000000000050508cb89f652824e06b8173",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x3809b2b7cc1b28cc5a87926aad83fd28789e81e2c9e3bf10"
                },
                "y": {
                    "raw": "0x17434386626d14f3dbf01760d9213a3e1cf37aec437d668a"
                }
            },
            "characteristics": {
                "seed": "0871EF2FEF24D696E6768756151758BEE0D95C15"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb191v1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.5",
            "field": {
                "type": "Binary",
                "bits": 191,
                "degree": 191,
                "poly": [
                    {
                        "power": 191,
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
                "basis": "poly"
            },
            "params": {
                "a": {
                    "raw": "0x2866537b676752636a68f56554e12640276b649ef7526267"
                },
                "b": {
                    "raw": "0x2e45ef571f00786f67b0081b9495a3d95462f5de0aa185ec"
                }
            },
            "order": "0x40000000000000000000000004a20e90c39067c893bbb9a5",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x36b3daf8a23206f9c4f299d7b21a9c369137f2c84ae1aa0d"
                },
                "y": {
                    "raw": "0x765be73433b3f95e332932e70ea245ca2418ea0ef98018fb"
                }
            },
            "characteristics": {
                "seed": "4E13CA542744D696E67687561517552F279A8C84"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb239v3",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.13",
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
                        "power": 36,
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
                    "raw": "0x01238774666a67766d6676f778e676b66999176666e687666d8766c66a9f"
                },
                "b": {
                    "raw": "0x6a941977ba9f6a435199acfc51067ed587f519c5ecb541b8e44111de1d40"
                }
            },
            "order": "0x0cccccccccccccccccccccccccccccac4912d2d9df903ef9888b8a0e4cff",
            "cofactor": "0x0a",
            "generator": {
                "x": {
                    "raw": "0x70f6e9d04d289c4e89913ce3530bfde903977d42b146d539bf1bde4e9c92"
                },
                "y": {
                    "raw": "0x2e5a0eaf6e5e1305b9004dce5c0ed7fe59a35608f33837c816d80b79f461"
                }
            },
            "characteristics": {
                "seed": "9E076F4D696E676875615175E11E9FDD"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb239v2",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.12",
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
                        "power": 36,
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
                    "raw": "0x4230017757a767fae42398569b746325d45313af0766266479b75654e65f"
                },
                "b": {
                    "raw": "0x5037ea654196cff0cd82b2c14a2fcf2e3ff8775285b545722f03eacdb74b"
                }
            },
            "order": "0x1555555555555555555555555555553c6f2885259c31e3fcdf154624522d",
            "cofactor": "0x6",
            "generator": {
                "x": {
                    "raw": "0x28f9d04e900069c8dc47a08534fe76d2b900b7d7ef31f5709f200c4ca205"
                },
                "y": {
                    "raw": "0x5667334c45aff3b5a03bad9dd75e2c71a99362567d5453f7fa6e227ec833"
                }
            },
            "characteristics": {
                "seed": "2AA6982FDFA4D696E676875615175D266727277D"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb239v1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.11",
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
                        "power": 36,
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
                    "raw": "0x32010857077c5431123a46b808906756f543423e8d27877578125778ac76"
                },
                "b": {
                    "raw": "0x790408f2eedaf392b012edefb3392f30f4327c0ca3f31fc383c422aa8c16"
                }
            },
            "order": "0x2000000000000000000000000000000f4d42ffe1492a4993f1cad666e447",
            "cofactor": "0x4",
            "generator": {
                "x": {
                    "raw": "0x57927098fa932e7c0a96d3fd5b706ef7e5f5c156e16b7e7c86038552e91d"
                },
                "y": {
                    "raw": "0x61d8ee5077c33fecf6f1a16b268de469c3c7744ea9a971649fc7a9616305"
                }
            },
            "characteristics": {
                "seed": "D34B9A4D696E676875615175CA71B920BFEFB05D"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb272w1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.16",
            "field": {
                "type": "Binary",
                "bits": 272,
                "degree": 272,
                "poly": [
                    {
                        "power": 272,
                        "coeff": "0x01"
                    },
                    {
                        "power": 56,
                        "coeff": "0x01"
                    },
                    {
                        "power": 3,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0x91a091f03b5fba4ab2ccf49c4edd220fb028712d42be752b2c40094dbacdb586fb20"
                },
                "b": {
                    "raw": "0x7167efc92bb2e3ce7c8aaaff34e12a9c557003d7c73a6faf003f99f6cc8482e540f7"
                }
            },
            "order": "0x0100faf51354e0e39e4892df6e319c72c8161603fa45aa7b998a167b8f1e629521",
            "cofactor": "0xff06",
            "generator": {
                "x": {
                    "raw": "0x6108babb2ceebcf787058a056cbe0cfe622d7723a289e08a07ae13ef0d10d171dd8d"
                },
                "y": {
                    "raw": "0x10c7695716851eef6ba7f6872e6142fbd241b830ff5efcaceccab05e02005dde9d23"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb304w1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.17",
            "field": {
                "type": "Binary",
                "bits": 304,
                "degree": 304,
                "poly": [
                    {
                        "power": 304,
                        "coeff": "0x01"
                    },
                    {
                        "power": 11,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0xfd0d693149a118f651e6dce6802085377e5f882d1b510b44160074c1288078365a0396c8e681"
                },
                "b": {
                    "raw": "0xbddb97e555a50a908e43b01c798ea5daa6788f1ea2794efcf57166b8c14039601e55827340be"
                }
            },
            "order": "0x0101d556572aabac800101d556572aabac8001022d5c91dd173f8fb561da6899164443051d",
            "cofactor": "0xfe2e",
            "generator": {
                "x": {
                    "raw": "0x197b07845e9be2d96adb0f5f3c7f2cffbd7a3eb8b6fec35c7fd67f26ddf6285a644f740a2614"
                },
                "y": {
                    "raw": "0xe19fbeb76e0da171517ecf401b50289bf014103288527a9b416a105e80260b549fdc1b92c03b"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2pnb368w1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.19",
            "field": {
                "type": "Binary",
                "bits": 368,
                "degree": 368,
                "poly": [
                    {
                        "power": 368,
                        "coeff": "0x01"
                    },
                    {
                        "power": 85,
                        "coeff": "0x01"
                    },
                    {
                        "power": 2,
                        "coeff": "0x01"
                    },
                    {
                        "power": 1,
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
                    "raw": "0xe0d2ee25095206f5e2a4f9ed229f1f256e79a0e2b455970d8d0d865bd94778c576d62f0ab7519ccd2a1a906ae30d"
                },
                "b": {
                    "raw": "0xfc1217d4320a90452c760a58edcd30c8dd069b3c34453837a34ed50cb54917e1c2112d84d164f444f8f74786046a"
                }
            },
            "order": "0x010090512da9af72b08349d98a5dd4c7b0532eca51ce03e2d10f3b7ac579bd87e909ae40a6f131e9cfce5bd967",
            "cofactor": "0xff70",
            "generator": {
                "x": {
                    "raw": "0x1085e2755381dccce3c1557afa10c2f0c0c2825646c5b34a394cbcfa8bc16b22e7e789e927be216f02e1fb136a5f"
                },
                "y": {
                    "raw": "0x7b3eb1bddcba62d5d8b2059b525797fc73822c59059c623a45ff3843cee8f87cd1855adaa81e2a0750b80fda2310"
                }
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb359v1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.18",
            "field": {
                "type": "Binary",
                "bits": 359,
                "degree": 359,
                "poly": [
                    {
                        "power": 359,
                        "coeff": "0x01"
                    },
                    {
                        "power": 68,
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
                    "raw": "0x5667676a654b20754f356ea92017d946567c46675556f19556a04616b567d223a5e05656fb549016a96656a557"
                },
                "b": {
                    "raw": "0x2472e2d0197c49363f1fe7f5b6db075d52b6947d135d8ca445805d39bc345626089687742b6329e70680231988"
                }
            },
            "order": "0x01af286bca1af286bca1af286bca1af286bca1af286bc9fb8f6b85c556892c20a7eb964fe7719e74f490758d3b",
            "cofactor": "0x4c",
            "generator": {
                "x": {
                    "raw": "0x3c258ef3047767e7ede0f1fdaa79daee3841366a132e163aced4ed2401df9c6bdcde98e8e707c07a2239b1b097"
                },
                "y": {
                    "raw": "0x53d7e08529547048121e9c95f3791dd804963948f34fae7bf44ea82365dc7868fe57e4ae2de211305a407104bd"
                }
            },
            "characteristics": {
                "seed": "2B354920B724D696E67687561517585BA1332DC6"
            }
        },
        {
            "form": "Weierstrass",
            "name": "c2tnb431r1",
            "category": "x962",
            "desc": "",
            "oid": "1.2.840.10045.3.0.20",
            "field": {
                "type": "Binary",
                "bits": 431,
                "degree": 431,
                "poly": [
                    {
                        "power": 431,
                        "coeff": "0x01"
                    },
                    {
                        "power": 120,
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
                    "raw": "0x1a827ef00dd6fc0e234caf046c6a5d8a85395b236cc4ad2cf32a0cadbdc9ddf620b0eb9906d0957f6c6feacd615468df104de296cd8f"
                },
                "b": {
                    "raw": "0x10d9b4a3d9047d8b154359abfb1b7f5485b04ceb868237ddc9deda982a679a5a919b626d4e50a8dd731b107a9962381fb5d807bf2618"
                }
            },
            "order": "0x0340340340340340340340340340340340340340340340340340340323c313fab50589703b5ec68d3587fec60d161cc149c1ad4a91",
            "cofactor": "0x2760",
            "generator": {
                "x": {
                    "raw": "0x120fc05d3c67a99de161d2f4092622feca701be4f50f4758714e8a87bbf2a658ef8c21e7c5efe965361f6c2999c0c247b0dbd70ce6b7"
                },
                "y": {
                    "raw": "0x20d0af8903a96f8d5fa2c255745d3c451b302c9346d9b7e485e7bce41f6b591f3e8f6addcbb0bc4c2f947a7de1a89b625d6a598b3760"
                }
            }
        },
        {
            "name": "c2onb191v4",
            "category": "x962",
            "desc": "A binary-field curve in optimal normal basis",
            "oid": "1.2.840.10045.3.0.8",
            "field": {
                "type": "Binary",
                "bits": 191,
                "degree": 191,
                "basis": "normal",
                "poly": [
                    {
                        "coeff": "0x01",
                        "power": 191
                    },
                    {
                        "coeff": "0x01",
                        "power": 190
                    },
                    {
                        "coeff": "0x01",
                        "power": 188
                    },
                    {
                        "coeff": "0x01",
                        "power": 184
                    },
                    {
                        "coeff": "0x01",
                        "power": 176
                    },
                    {
                        "coeff": "0x01",
                        "power": 160
                    },
                    {
                        "coeff": "0x01",
                        "power": 128
                    },
                    {
                        "coeff": "0x01",
                        "power": 64
                    },
                    {
                        "coeff": "0x01",
                        "power": 63
                    },
                    {
                        "coeff": "0x01",
                        "power": 62
                    },
                    {
                        "coeff": "0x01",
                        "power": 60
                    },
                    {
                        "coeff": "0x01",
                        "power": 56
                    },
                    {
                        "coeff": "0x01",
                        "power": 48
                    },
                    {
                        "coeff": "0x01",
                        "power": 32
                    },
                    {
                        "coeff": "0x01",
                        "power": 0
                    }
                ]
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x65903E04E1E4924253E26A3C9AC28C758BD8184A3FB680E8"
                },
                "b": {
                    "raw": "0x54678621B190CFCE282ADE219D5B3A065E3F4B3FFDEBB29B"
                }
            },
            "order": "0x4000000000000000000000009CF2D6E3901DAC4C32EEC65D",
            "cofactor": "0x2",
            "generator": {
                "x": {
                    "raw": "0x025A2C69A32E8638E51CCEFAAD05350A978457CB5FB6DF994A"
                },
                "y": {
                    "raw": ""
                }
            },
            "characteristics": {
                "seed": "A399387EAE54D696E6768756151750E58B416D57"
            }
        },
        {
            "name": "c2onb191v5",
            "category": "x962",
            "desc": "A binary-field curve in optimal normal basis",
            "oid": "1.2.840.10045.3.0.9",
            "field": {
                "type": "Binary",
                "bits": 191,
                "degree": 191,
                "basis": "normal",
                "poly": [
                    {
                        "coeff": "0x01",
                        "power": 191
                    },
                    {
                        "coeff": "0x01",
                        "power": 190
                    },
                    {
                        "coeff": "0x01",
                        "power": 188
                    },
                    {
                        "coeff": "0x01",
                        "power": 184
                    },
                    {
                        "coeff": "0x01",
                        "power": 176
                    },
                    {
                        "coeff": "0x01",
                        "power": 160
                    },
                    {
                        "coeff": "0x01",
                        "power": 128
                    },
                    {
                        "coeff": "0x01",
                        "power": 64
                    },
                    {
                        "coeff": "0x01",
                        "power": 63
                    },
                    {
                        "coeff": "0x01",
                        "power": 62
                    },
                    {
                        "coeff": "0x01",
                        "power": 60
                    },
                    {
                        "coeff": "0x01",
                        "power": 56
                    },
                    {
                        "coeff": "0x01",
                        "power": 48
                    },
                    {
                        "coeff": "0x01",
                        "power": 32
                    },
                    {
                        "coeff": "0x01",
                        "power": 0
                    }
                ]
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x25F8D06C97C822536D469CD5170CDD7BB9F500BD6DB110FB"
                },
                "b": {
                    "raw": "0x75FF570E35CA94FB3780C2619D081C17AA59FBD5E591C1C4"
                }
            },
            "order": "0x0FFFFFFFFFFFFFFFFFFFFFFFEEB354B7270B2992B7818627",
            "cofactor": "0x8",
            "generator": {
                "x": {
                    "raw": "0x032A16910E8F6C4B199BE24213857ABC9C992EDFB2471F3C68"
                },
                "y": {
                    "raw": ""
                }
            },
            "characteristics": {
                "seed": "2D88F7BC545794D696E676875615175973391555"
            }
        },
        {
            "name": "c2onb239v4",
            "category": "x962",
            "desc": "A binary-field curve in optimal normal basis",
            "oid": "1.2.840.10045.3.0.14",
            "field": {
                "type": "Binary",
                "bits": 239,
                "degree": 239,
                "basis": "normal",
                "poly": [
                    {
                        "coeff": "0x01",
                        "power": 239
                    },
                    {
                        "coeff": "0x01",
                        "power": 238
                    },
                    {
                        "coeff": "0x01",
                        "power": 236
                    },
                    {
                        "coeff": "0x01",
                        "power": 232
                    },
                    {
                        "coeff": "0x01",
                        "power": 224
                    },
                    {
                        "coeff": "0x01",
                        "power": 208
                    },
                    {
                        "coeff": "0x01",
                        "power": 207
                    },
                    {
                        "coeff": "0x01",
                        "power": 206
                    },
                    {
                        "coeff": "0x01",
                        "power": 204
                    },
                    {
                        "coeff": "0x01",
                        "power": 200
                    },
                    {
                        "coeff": "0x01",
                        "power": 192
                    },
                    {
                        "coeff": "0x01",
                        "power": 144
                    },
                    {
                        "coeff": "0x01",
                        "power": 143
                    },
                    {
                        "coeff": "0x01",
                        "power": 142
                    },
                    {
                        "coeff": "0x01",
                        "power": 140
                    },
                    {
                        "coeff": "0x01",
                        "power": 136
                    },
                    {
                        "coeff": "0x01",
                        "power": 128
                    },
                    {
                        "coeff": "0x01",
                        "power": 16
                    },
                    {
                        "coeff": "0x01",
                        "power": 15
                    },
                    {
                        "coeff": "0x01",
                        "power": 14
                    },
                    {
                        "coeff": "0x01",
                        "power": 12
                    },
                    {
                        "coeff": "0x01",
                        "power": 8
                    },
                    {
                        "coeff": "0x01",
                        "power": 0
                    }
                ]
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x182DD45F5D470239B8983FEA47B8B292641C57F9BF84BAECDE8BB3ADCE30"
                },
                "b": {
                    "raw": "0x147A9C1D4C2CE9BE5D34EC02797F76667EBAD5A3F93FA2A524BFDE91EF28"
                }
            },
            "order": "0x200000000000000000000000000000474F7E69F42FE430931D0B455AAE8B",
            "cofactor": "0x04",
            "generator": {
                "x": {
                    "raw": "0x034912AD657F1D1C6B32EDB9942C95E226B06FB012CD40FDEA0D72197C8104"
                },
                "y": {
                    "raw": ""
                }
            },
            "characteristics": {
                "seed": "F851638CFA4D696E67687561517556513841BFAC"
            }
        },
        {
            "name": "c2onb239v5",
            "category": "x962",
            "desc": "A binary-field curve in optimal normal basis",
            "oid": "1.2.840.10045.3.0.15",
            "field": {
                "type": "Binary",
                "bits": 239,
                "degree": 239,
                "basis": "normal",
                "poly": [
                    {
                        "coeff": "0x01",
                        "power": 239
                    },
                    {
                        "coeff": "0x01",
                        "power": 238
                    },
                    {
                        "coeff": "0x01",
                        "power": 236
                    },
                    {
                        "coeff": "0x01",
                        "power": 232
                    },
                    {
                        "coeff": "0x01",
                        "power": 224
                    },
                    {
                        "coeff": "0x01",
                        "power": 208
                    },
                    {
                        "coeff": "0x01",
                        "power": 207
                    },
                    {
                        "coeff": "0x01",
                        "power": 206
                    },
                    {
                        "coeff": "0x01",
                        "power": 204
                    },
                    {
                        "coeff": "0x01",
                        "power": 200
                    },
                    {
                        "coeff": "0x01",
                        "power": 192
                    },
                    {
                        "coeff": "0x01",
                        "power": 144
                    },
                    {
                        "coeff": "0x01",
                        "power": 143
                    },
                    {
                        "coeff": "0x01",
                        "power": 142
                    },
                    {
                        "coeff": "0x01",
                        "power": 140
                    },
                    {
                        "coeff": "0x01",
                        "power": 136
                    },
                    {
                        "coeff": "0x01",
                        "power": 128
                    },
                    {
                        "coeff": "0x01",
                        "power": 16
                    },
                    {
                        "coeff": "0x01",
                        "power": 15
                    },
                    {
                        "coeff": "0x01",
                        "power": 14
                    },
                    {
                        "coeff": "0x01",
                        "power": 12
                    },
                    {
                        "coeff": "0x01",
                        "power": 8
                    },
                    {
                        "coeff": "0x01",
                        "power": 0
                    }
                ]
            },
            "form": "Weierstrass",
            "params": {
                "a": {
                    "raw": "0x1ECF1B9D28D8017505E17475D3DF2982E243CA5CB5E9F94A3F36124A486E"
                },
                "b": {
                    "raw": "0x3EE257250D1A2E66CEF23AA0F25B12388DE8A10FF9554F90AFBAA9A08B6D"
                }
            },
            "order": "0x1555555555555555555555555555558CF77A5D0589D2A9340D963B7AD703",
            "cofactor": "0x06",
            "generator": {
                "x": {
                    "raw": "0x02193279FC543E9F5F7119189785B9C60B249BE4820BAF6C24BDFA2813F8B8"
                },
                "y": {
                    "raw": ""
                }
            },
            "characteristics": {
                "seed": "2C04F44D696E676875615175C586B41F6CA150C9"
            }
        }
    ]
}