export default class SaleItem {
    constructor(salePrice, totalPrice, vatToPay, vatRate, _id) {
      this.salePrice = salePrice;
      this.totalPrice = totalPrice;
      this.vatToPay = vatToPay;
      this.vatRate = vatRate;
      this._id = _id;
    }
  }