import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    dishList: [
      {
        dishTitle: "Warme vorspeisen",
        hrefId: "warme",
        dishChildren: [
          {
            dishName: "Papadam (2 Stuck)",
            dishContent: "hauchdunne, gewurzte Linsenfladen",
            dishPrice: 2.6,
            count: 0,
          },
          {
            dishName: "Gemischte Vorspeisen (fur 2 Personen)",
            dishContent:
              "mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras",
            dishPrice: 12.5,
            count: 0,
          },
          {
            dishName: "Vegetable Samosa (2 Stuck)",
            dishContent: "Pastetchen mit frischem Gemuse gefullt",
            dishPrice: 5.5,
            count: 0,
          },
        ],
      },
      {
        dishTitle: "Suppen",
        hrefId: "suppen",
        dishChildren: [
          {
            dishName: "Malkatani Suppe",
            dishContent: "mit Linsen, Reis und Huhnerfleisch",
            dishPrice: 4.8,
            count: 0,
          },
          {
            dishName: "Chicken Creme Soup",
            dishContent: "Huhnercremesuppe",
            dishPrice: 4.8,
            count: 0,
          },
          {
            dishName: "Tomatensuppe",
            dishContent: "frische Tomatencremesuppe",
            dishPrice: 4.5,
            count: 0,
          },
        ],
      },
      {
        dishTitle: "Salate",
        hrefId: "salate",
        dishChildren: [
          {
            dishName: "Indian Salat",
            dishContent: "hauchdunne, gewurzte Linsenfladen",
            dishPrice: 7.5,
            count: 0,
          },
          {
            dishName: "Chicken Chat",
            dishContent:
              "mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras",
            dishPrice: 7.5,
            count: 0,
          },
          {
            dishName: "Gemischter Salat-Mango",
            dishContent: "gemischter Salat mit indischem Kase und Mangostucken",
            dishPrice: 6.5,
            count: 0,
          },
        ],
      },
      {
        dishTitle: "Beilagen",
        hrefId: "beilagen",
        dishChildren: [
          {
            dishName: "Lassan Nan",
            dishContent: "frisches Hefebrot mit Knoblauch",
            dishPrice: 3.3,
            count: 0,
          },
          {
            dishName: "Butter Nan",
            dishContent: "frisches Hefebrot mit Butter",
            dishPrice: 3.3,
            count: 0,
          },
          {
            dishName: "Raita Gurken",
            dishContent: "Joghurt und Gurken",
            dishPrice: 3,
            count: 0,
          },
          {
            dishName: "Peschawari Nan",
            dishContent:
              "frisches Hefebrot mit Nussen und indischem Kasegefullt",
            dishPrice: 4.5,
            count: 0,
          },
        ],
      },
      {
        dishTitle: "Spezialitaten aus dem tandoor",
        hrefId: "tandoor",
        dishChildren: [],
      },
      {
        dishTitle: "Vegetarosche-spezialitaten",
        hrefId: "vegetarosche",
        dishChildren: [],
      },
      {
        dishTitle: "Huhn-spezialitaten",
        hrefId: "huhn",
        dishChildren: [],
      },
      {
        dishTitle: "Enten-spezialitaten",
        hrefId: "enten",
        dishChildren: [],
      },
      {
        dishTitle: "Lamm-spezialitaten",
        hrefId: "lamm",
        dishChildren: [],
      },
      {
        dishTitle: "Fisch-spezialitaten",
        hrefId: "fisch",
        dishChildren: [],
      },
      {
        dishTitle: "Reisgerichte",
        hrefId: "reisgerichte",
        dishChildren: [],
      },
      {
        dishTitle: "Nachspeisen",
        hrefId: "nachspeisen",
        dishChildren: [],
      },
      {
        dishTitle: "Alkoholfreie getranke",
        hrefId: "alkoholfreie",
        dishChildren: [],
      },
      {
        dishTitle: "Alkoholische getranke",
        hrefId: "alkoholische",
        dishChildren: [],
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      state.dishList[action.payload.cateIdx].dishChildren[
        action.payload.dishIdx
      ].count += 1;
    },
    decrement: (state, action) => {
      state.dishList[action.payload.cateIdx].dishChildren[
        action.payload.dishIdx
      ].count = Math.max(
        state.dishList[action.payload.cateIdx].dishChildren[
          action.payload.dishIdx
        ].count - 1,
        0
      );
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
