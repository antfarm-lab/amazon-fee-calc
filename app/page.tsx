"use client";

import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState("");

  const salePrice = Number(price) || 0;
  const fee = Math.floor(salePrice * 0.15); // Amazon仮15%
  const netAmount = salePrice - fee;

  const reset = () => {
    setPrice("");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-2 text-2xl font-bold">
          Amazon手数料計算ツール
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          販売価格からAmazon手数料（15%）と手取り額を計算します。
        </p>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="販売価格（例：5000）"
          className="w-full rounded border p-3"
        />

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">Amazon手数料（15%）</p>
          <p className="text-2xl font-bold">{fee.toLocaleString()}円</p>

          <p className="mt-4 text-sm text-gray-600">手取り金額</p>
          <p className="text-3xl font-bold">
            {netAmount.toLocaleString()}円
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
        >
          リセット
        </button>
               
      </div>
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    Amazon販売手数料を把握することが重要な理由
  </h2>

  <p className="mb-3">
    Amazonで商品を販売する場合、カテゴリーごとに販売手数料が発生します。
    手数料を考慮しないと想定利益と実際の利益に差が出ます。
  </p>

  <p className="mb-3">
    特にFBA販売やせどりでは利益率が小さいため、
    手数料計算を事前に行うことが重要です。
  </p>

  <p>
    このAmazon手数料計算ツールでは販売価格から
    おおよその手数料を自動計算できます。
  </p>
</section>
     <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://calc-tools-mauve.vercel.app/">
      メルカリ・Amazon・ラクマ利益計算ツール
    </a>
    <a href="https://shipping-calc-olive.vercel.app/">
      メルカリ送料計算ツール
    </a>
    <a href="https://price-reverse-calc.vercel.app/">
      利益から販売価格を逆算するツール
    </a>
    <a href="https://fee-calc-seven.vercel.app/">
      メルカリ販売手数料計算ツール
    </a>
    <a href="https://profit-rate-calc.vercel.app/">
      メルカリ利益率計算ツール
    </a>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon販売手数料計算ツール
    </a>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI（投資利益率）計算ツール
    </a>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </div>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}