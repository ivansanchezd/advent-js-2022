function wrapping(gifts) {
  const WRAP_UP = "**\n*";
  const WRAP_DOWN = "*\n**";
  const getWrapsFromGift = (gift) => "*".repeat(gift.length);

  return gifts.map(
    (gift) =>
      `${getWrapsFromGift(gift)}${WRAP_UP}${gift}${WRAP_DOWN}${getWrapsFromGift(
        gift
      )}`
  );
}
