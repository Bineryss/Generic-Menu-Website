export default interface ListDO {
    list: ListItem[]
    price: number
}

export interface ListItem {
    id: number
    count: number
    price: number
}