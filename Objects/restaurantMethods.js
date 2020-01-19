let restaurant = {
    name: 'Hook',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        if (this.guestCapacity >(this.guestCount +partySize)){
            return true
        }
        else{
            return false
        }
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}
restaurant.guestCount = 65

console.log(restaurant.checkAvailability(12))

restaurant.removeParty(10)
console.log(restaurant.checkAvailability(12))
restaurant.seatParty(12)
console.log(restaurant.checkAvailability(12))

