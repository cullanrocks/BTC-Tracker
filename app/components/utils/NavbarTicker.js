import axios from "axios";

const NavbarTicker = {

	placeholderPrice: 0,
    percentageChange: 0,
    lastPrice: 0,

	// ************************************************************************************
    // UNCOMMENT THIS TO SEE THE PRICE OF BTC IN REAL TIME
    // ************************************************************************************

    // function priceUSD() {
    //     $.get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR", function(data) {
    //         var USDprice = data.BTC;
    //         // console.log(USDprice);
    //         $("#usd-price").html(`USD/BTC: $${USDprice}<br>`)
    //     });
    // }

    priceBTC: function() {
    	return axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD").then((response)=>{
    		console.log(response.data.USD);
    		return (response)
    	}).catch((error)=>{
    		console.log(error)
    	})
    }
}

export default NavbarTicker;