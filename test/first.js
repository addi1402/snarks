// SPDX-License-Identifier: MIT
const VerifierTwo = artifacts.require("VerifierTwo");

contract("VerifierTwo", (accounts) => {
  let verifierTwo;

  before(async () => {
    verifierTwo = await VerifierTwo.new();
  });

  it("Proof 01 Passed: Patient Details Proof Verified", async () => {
    const result = await verifierTwo.verifyTx(
      [
        [
          "0x21e16d46e656e854f5b498be5e849d44f3943023a4a96bca1691bdb60a59a54c",
          "0x2625ee284b11cf6bfcc22b4e413154a50d9653b9a3138ea4dd3a3733508ff97e",
        ],
        [
            [
              "0x016867d2b15ee30691c4b421f6b93fe6b994e5c164d5104fed90d7f8f1b8490f",
              "0x047b9f126d93ba2540e4f7bb81f61fe5a49fb5150505ce0f37d6f98aee2b5866"
            ],
            [
              "0x1ca6d60d488537e4f18ffe0b492caba408d536ad14b1e50d10ef852c2f14c655",
              "0x1a43b335b7d7677909426ca30537ce4262e0fe2224eeb8714185db3b0fdff9e1"
            ]
          ],
          [
            "0x291b0150bb9234fa4c7a90db42d2e3749087580e6bf0ef64f0b653a8841e1e4c",
            "0x161f162c233516d9e5ad5f7824f7ca6ceafab90eb8ca662ab770c77a8582ad42"
          ],
      ],
      [
        "0x0000000000000000000000000000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000000000000000000000000000002",
        "0x0000000000000000000000000000000000000000000000000000000000000003",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000000000000000000000000000002",
        "0x0000000000000000000000000000000000000000000000000000000000000003",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ]
    );
    console.log(result);
    assert.equal(result, true, "The result should be as expected");
  });
});