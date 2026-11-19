function CalculateFinalPrice(CartItems, MembershipTier) {
  let TotalBill = 0;
  let TotalPayableBill = 0;
  for (const item of CartItems) {
    TotalBill += item;
  }
  if (MembershipTier === "Gold") {
    TotalPayableBill = TotalBill * 0.8;
  } else if (MembershipTier === "Silver") {
    TotalPayableBill = TotalBill * 0.9;
  } else {
    TotalPayableBill = TotalBill;
  }

  if (TotalBill > 100) {
    TotalPayableBill = TotalPayableBill - 15;
  }
  return TotalPayableBill;
}

let CartItems = [10, 20, 50, 21];
let MembershipTier = "Gold";
console.log(
  "Final Price is: " + CalculateFinalPrice(CartItems, MembershipTier),
);
