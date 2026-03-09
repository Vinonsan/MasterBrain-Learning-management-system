"use client";

import Input from "@/src/components/base/Input";

type Props = {
  paymentMethod: string;
  setPaymentMethod: (_value: string) => void;
  transactionId: string;
  setTransactionId: (_value: string) => void;
  paidAmount: string;
  setPaidAmount: (_value: string) => void;
  setReceiptFile: (_value: File | null) => void;
  receiptFileName?: string;
};

const PaymentInfoStep = ({
  paymentMethod,
  setPaymentMethod,
  transactionId,
  setTransactionId,
  paidAmount,
  setPaidAmount,
  setReceiptFile,
  receiptFileName,
}: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="paymentMethod" className="mb-1 block text-sm font-medium text-gray-700">
          Payment Method
        </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="">Select payment method</option>
          <option value="bank-transfer">Bank Transfer</option>
          <option value="card">Card Payment</option>
          <option value="cash-deposit">Cash Deposit</option>
        </select>
      </div>

      <Input
        id="transactionId"
        label="Transaction Reference"
        type="text"
        placeholder="Enter transaction id/reference"
        value={transactionId}
        onChange={(value) => setTransactionId(String(value))}
        required
      />

      <Input
        id="paidAmount"
        label="Paid Amount (LKR)"
        type="number"
        placeholder="Enter paid amount"
        value={paidAmount}
        onChange={(value) => setPaidAmount(String(value))}
        required
      />

      <div>
        <label htmlFor="receiptFile" className="mb-1 block text-sm font-medium text-gray-700">
          Receipt Upload
        </label>
        <input
          id="receiptFile"
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <p className="mt-1 text-xs text-zinc-500">
          {receiptFileName ? `Selected: ${receiptFileName}` : "Accepted: image or PDF"}
        </p>
      </div>
    </div>
  );
};

export default PaymentInfoStep;

