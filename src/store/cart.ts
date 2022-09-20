import { createSlice } from "@reduxjs/toolkit";

export type Item = {
    id: number,
    name: string,
    price: number,
    count: number,
}

type Cart = {
    items: Item[],
    totalCount: number,
}

const initialState: Cart = {
    items: [],
    totalCount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // 1. 장바구니 상품 저장
        save(state: Cart, action: any) {
            const newItem: Item = action.payload;
            const existionItem = state.items.find(item => item.id === newItem.id);
            if(!existionItem) {
                state.items.push(newItem);
            } else {
                this.increment(state, 1)
            }
        },
        // 2. 장바구니 상품 삭제
        remove(state: Cart, action: any) {
            const removeItem: Item = action.payload;
            const items = state.items.filter(item => item.id !== removeItem.id)
            state.items = items;
            state.totalCount -= removeItem.count
        },

        // 3. 갯수 올리기
        increment(state:Cart, action: any) {
            const item: Item = action.payload;
            item.count++;
            this.changeThePrice(state, item)
            state.totalCount++;
        },

        // 4. 갯수 줄이기
        decrement(state: Cart, action: any) {
            state.totalCount--;
            const item: Item = action.payload;
            if(state.totalCount === 1) {
                this.remove(state, item)
            } else {
                state.totalCount--;
                this.changeThePrice(state, item)
            }
        },

        // 5. 가격 변동
        changeThePrice(state: Cart, action: any) {
            const item: Item = action.payload;
            item.price *= item.count;
        },

        // 5. 주문
        cartOrder(state: Cart, action: any) {
            
        }

    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer