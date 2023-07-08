let isCool: boolean = true

var age: number = 56

let eyeColor: string = 'brown'
let favoriteQuote: string = `i'm not old, I'm only ${age}`

let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

let wizard: object = {
  a: 'john'
};

let nulll: undefined = undefined
let no: null = null

let basket: [string, number]
basket = ['basket', 5]

enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: number = Size.Small;

let whatever: any = 'foo'
whatever = basket

let sing = (): void => {
  console.log('no return')
}

// never - either never returns or a variable returned is never true - may throw error
let error = (): never => {
  throw Error("oops")
}

// interface
// types don't create a new name, but interfaces create a new name
type RobotArmy = {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("fight")
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
  console.log('fight')
}
