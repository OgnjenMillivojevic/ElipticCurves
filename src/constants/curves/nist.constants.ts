export const NIST = {
    "name": "NIST",
    "desc": "RECOMMENDED ELLIPTIC CURVES FOR FEDERAL GOVERNMENT USE  July 1999",
    "curves": [
        {
            "name": "P-192",
            "category": "nist",
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
            "name": "P-224",
            "category": "nist",
            "desc": "",
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
                "secg/secp224r1",
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
            "name": "P-256",
            "category": "nist",
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
            "name": "P-384",
            "category": "nist",
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
                "secg/secp384r1",
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
            "name": "P-521",
            "category": "nist",
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
                "secg/secp521r1",
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
            "name": "K-163",
            "category": "nist",
            "desc": "Koblitz curve.",
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
                "secg/sect163k1"
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
            "name": "B-163",
            "category": "nist",
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
                "secg/sect163r2",
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
            "name": "K-233",
            "category": "nist",
            "desc": "Koblitz curve.",
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
                "secg/sect233k1",
                "wtls/wap-wsg-idm-ecid-wtls10",
                "x963/ansit233k1"
            ],
            "characteristics": {
                "discriminant": "1",
                "j_invariant": "1",
                "trace_of_frobenius": "-137381546011108235394987299651366779",
                "anomalous": false,
                "supersingular": false,
                "cm_disc": "6134885641591612255497560766468467084110046420941258648476388160195683"
            }
        },
        {
            "name": "B-233",
            "category": "nist",
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
            "order": "0x1000000000000000000000000000013e974e72f8a6922031d2603cfe0d7",
            "cofactor": "0x2",
            "aliases": [
                "secg/sect233r1",
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
            "name": "K-283",
            "category": "nist",
            "desc": "Koblitz curve.",
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
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x503213f78ca44883f1a3b8162f188e553cd265f23c1567a16876913b0c2ac2458492836"
                },
                "y": {
                    "raw": "0x1ccda380f1c9e318d90f95d07e5426fe87e45c0e8184698e45962364e34116177dd2259"
                }
            },
            "order": "0x1ffffffffffffffffffffffffffffffffffe9ae2ed07577265dff7f94451e061e163c61",
            "cofactor": "0x4",
            "aliases": [
                "secg/sect283k1",
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
            "name": "B-283",
            "category": "nist",
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
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x27b680ac8b8596da5a4af8a19a0303fca97fd7645309fa2a581485af6263e313b79a2f5"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x5f939258db7dd90e1934f8c70b0dfec2eed25b8557eac9c80e2e198f8cdbecd86b12053"
                },
                "y": {
                    "raw": "0x3676854fe24141cb98fe6d4b20d02b4516ff702350eddb0826779c813f0df45be8112f4"
                }
            },
            "order": "0x3ffffffffffffffffffffffffffffffffffef90399660fc938a90165b042a7cefadb307",
            "cofactor": "0x2",
            "aliases": [
                "secg/sect283r1",
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
            "name": "K-409",
            "category": "nist",
            "desc": "Koblitz curve.",
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
                    "raw": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x060f05f658f49c1ad3ab1890f7184210efd0987e307c84c27accfb8f9f67cc2c460189eb5aaaa62ee222eb1b35540cfe9023746"
                },
                "y": {
                    "raw": "0x1e369050b7c4e42acba1dacbf04299c3460782f918ea427e6325165e9ea10e3da5f6c42e9c55215aa9ca27a5863ec48d8e0286b"
                }
            },
            "order": "0x7ffffffffffffffffffffffffffffffffffffffffffffffffffe5f83b2d4ea20400ec4557d5ed3e3e7ca5b4b5c83b8e01e5fcf",
            "cofactor": "0x4",
            "aliases": [
                "secg/sect409k1",
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
            "name": "B-409",
            "category": "nist",
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
                    "raw": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x021a5c2c8ee9feb5c4b9a753b7b476b7fd6422ef1f3dd674761fa99d6ac27c8a9a197b272822f6cd57a55aa4f50ae317b13545f"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x15d4860d088ddb3496b0c6064756260441cde4af1771d4db01ffe5b34e59703dc255a868a1180515603aeab60794e54bb7996a7"
                },
                "y": {
                    "raw": "0x061b1cfab6be5f32bbfa78324ed106a7636b9c5a7bd198d0158aa4f5488d08f38514f1fdf4b4f40d2181b3681c364ba0273c706"
                }
            },
            "order": "0x10000000000000000000000000000000000000000000000000001e2aad6a612f33307be5fa47c3c9e052f838164cd37d9a21173",
            "cofactor": "0x2",
            "aliases": [
                "secg/sect409r1",
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
            "name": "K-571",
            "category": "nist",
            "desc": "Koblitz curve.",
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
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                },
                "b": {
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x26eb7a859923fbc82189631f8103fe4ac9ca2970012d5d46024804801841ca44370958493b205e647da304db4ceb08cbbd1ba39494776fb988b47174dca88c7e2945283a01c8972"
                },
                "y": {
                    "raw": "0x349dc807f4fbf374f4aeade3bca95314dd58cec9f307a54ffc61efc006d8a2c9d4979c0ac44aea74fbebbb9f772aedcb620b01a7ba7af1b320430c8591984f601cd4c143ef1c7a3"
                }
            },
            "order": "0x20000000000000000000000000000000000000000000000000000000000000000000000131850e1f19a63e4b391a8db917f4138b630d84be5d639381e91deb45cfe778f637c1001",
            "cofactor": "0x4",
            "aliases": [
                "secg/sect571k1",
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
            "name": "B-571",
            "category": "nist",
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
                    "raw": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
                },
                "b": {
                    "raw": "0x2f40e7e2221f295de297117b7f3d62f5c6a97ffcb8ceff1cd6ba8ce4a9a18ad84ffabbd8efa59332be7ad6756a66e294afd185a78ff12aa520e4de739baca0c7ffeff7f2955727a"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x303001d34b856296c16c0d40d3cd7750a93d1d2955fa80aa5f40fc8db7b2abdbde53950f4c0d293cdd711a35b67fb1499ae60038614f1394abfa3b4c850d927e1e7769c8eec2d19"
                },
                "y": {
                    "raw": "0x37bf27342da639b6dccfffeb73d69d78c6c27a6009cbbca1980f8533921e8a684423e43bab08a576291af8f461bb2a8b3531d2f0485c19b16e2f1516e23dd3c1a4827af1b8ac15b"
                }
            },
            "order": "0x3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe661ce18ff55987308059b186823851ec7dd9ca1161de93d5174d66e8382e9bb2fe84e47",
            "cofactor": "0x2",
            "aliases": [
                "secg/sect571r1",
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