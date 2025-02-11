//class CartTestPage {
    //get cartItemCount() {
// return $('span.shopping_cart_badge'); 
   // }

   // async getItemCount() {
        const isDisplayed = await this.cartItemCount.isExisting();
        if (!isDisplayed) return 0;  

        const cartItemCountText = await this.cartItemCount.getText();
        return parseInt(cartItemCountText) || 0;
   // }
//}

//.exports = new CartTestPage();//