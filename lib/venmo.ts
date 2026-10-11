/** Prefill a Venmo pay screen. The buyer can still edit amount and note. */
export function venmoPayUrl(username: string, amount: number, note: string) {
  const params = new URLSearchParams({
    txn: "pay",
    amount: amount.toFixed(2),
    note,
  })
  return `https://venmo.com/${username}?${params.toString()}`
}

export function storeItemNote(name: string, size?: string, preorder = false) {
  const label = preorder ? `${name} pre-order` : name
  return size ? `${label} - ${size}` : label
}
