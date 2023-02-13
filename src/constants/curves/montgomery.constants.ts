export const MONTGOMERY = {
    "name": "MONTGOMERY",
    "desc": "MONTGOMERY example curves.",
    "curves": [
        {
            "name": "M-221",
            "desc": "Curve from https://eprint.iacr.org/2013/647.pdf",
            "category": "MONTGOMERY",
            "form": "Montgomery",
            "field": {
                "type": "Prime",
                "p": "0x1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD",
                "bits": 221
            },
            "params": {
                "a": {
                    "raw": "0x01c93a"
                },
                "b": {
                    "raw": "0x01"
                }
            },
            "generator": {
                "x": {
                    "raw": "0x04"
                },
                "y": {
                    "raw": "0x0f7acdd2a4939571d1cef14eca37c228e61dbff10707dc6c08c5056d"
                }
            },
            "order": "0x040000000000000000000000000015A08ED730E8A2F77F005042605B",
            "cofactor": "0x8"
        }
    ]
}