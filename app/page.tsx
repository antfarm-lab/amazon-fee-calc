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
                <div className="mt-6 border-t pt-4">
          <p className="mb-2 text-sm font-bold text-gray-700">
            関連ツール
          </p>
          <ul className="space-y-2 text-sm text-blue-600 underline">
            <li>
              <a href="https://calc-tools.vercel.app/">
                メルカリ利益計算ツール
              </a>
            </li>
            <li>
              <a href="https://shipping-calc.vercel.app/">
                フリマ送料計算ツール
              </a>
            </li>
            <li>
              <a href="https://fee-calc.vercel.app/">
                販売手数料計算ツール
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm">
    <a className="text-blue-600 underline" href="https://calc-tools-mauve.vercel.app/">
      利益計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </div>
</section>
    </main>
  );
}