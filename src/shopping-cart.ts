/**
 * Create a shopping cart
 *
 * Initial Requirements:
 * 1) Add items
 * 2) remove items
 * 3) total
 * 4) apply coupons:
 *    - coupons can be either percent or dollar
 *    - coupons are applied to a specific item
 *
 * Nice to haves:
 * 1) some coupon types might have restrictions
 * 2) coupons can also be applied at the cart level
 */

type ItemType = 'Hamburger' | 'Soda' | 'Fries'
const priceMap: Record<ItemType, number> = {
  Hamburger: 5,
  Soda: 2,
  Fries: 2,
}

class CartItem {
  constructor(type: ItemType) {
    this.type = type
    this.units = 1
    this.pricePerUnit = priceMap[type]
  }

  type: ItemType
  units: number
  pricePerUnit: number
}

class Coupon {
  constructor(appliesTo: ItemType, valueOffPerUnit?: number, percentageOff?: number) {
    this.appliesTo = appliesTo

    if (valueOffPerUnit) {
      this.valueOffPerUnit = valueOffPerUnit
    } else if (percentageOff) {
      if (percentageOff > 1) {
        throw new Error('Cannot give coupon for more than 100%')
      } else if (percentageOff <= 0) {
        throw new Error('Invalid percentage amount')
      }
      this.percentageOff = percentageOff
    } else {
      throw new Error('You must specify a discount')
    }
  }

  appliesTo: ItemType
  valueOffPerUnit?: number
  percentageOff?: number
}

class Cart {
  items: CartItem[]
  coupons: Coupon[]

  constructor() {
    this.items = []
    this.coupons = []
  }

  addItem(item: CartItem) {
    const existing = this.items.find((x) => x.type === item.type)
    if (existing) {
      existing.units += 1
    } else {
      this.items.push(item)
    }
  }

  removeItem(itemType: ItemType) {
    const match = this.items.find((x) => x.type === itemType)
    if (match && match.units > 1) {
      match.units -= 1
    } else if (match) {
      this.items.splice(this.items.indexOf(match), 1)
    }
  }

  applyCoupon(coupon: Coupon) {
    this.coupons.push(coupon)
  }

  getTotal() {
    const total = this.items.reduce((total, item) => {
      const matchingCoupon = this.coupons.find((x) => x.appliesTo === item.type)
      let pricePerUnit = item.pricePerUnit

      if (matchingCoupon && matchingCoupon.valueOffPerUnit) {
        pricePerUnit -= matchingCoupon.valueOffPerUnit
      } else if (matchingCoupon && matchingCoupon.percentageOff) {
        pricePerUnit -= matchingCoupon.percentageOff * item.pricePerUnit
      }

      return (total += item.units * pricePerUnit)
    }, 0)

    console.log(total)
  }

  debug() {
    console.log({ items: this.items, coupons: this.coupons })
  }
}

const cart = new Cart()
cart.addItem(new CartItem('Hamburger')) //4
cart.addItem(new CartItem('Hamburger')) //4
cart.applyCoupon(new Coupon('Hamburger', 1))
cart.addItem(new CartItem('Soda')) // 1.8
cart.applyCoupon(new Coupon('Soda', undefined, 0.1))
cart.addItem(new CartItem('Fries')) // 2
cart.removeItem('Hamburger') // -4
cart.getTotal()
cart.debug()
