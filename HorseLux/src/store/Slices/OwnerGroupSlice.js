import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/BaseUrl";
import { jsonUrl } from "../App";
import { useSelector } from "react-redux";




export const asyncGetSingleOwnerGroup=createAsyncThunk("asyncGetSingleOwnerGroup/get",async(id,{rejectWithValue})=>{
try {
    const groupData = await jsonUrl.get(`/groups/${id}`)
    return groupData.data.results
} catch (error) {
  console.log(error);
   return rejectWithValue(error);
}
})


export const asyncPostOwnerGroup=createAsyncThunk("asyncPostOwnerGroup/post",async(data,{rejectWithValue})=>{
  try {
    console.log(data);
      const groupData = await jsonUrl.post(`/groups/}`,data)
      return groupData.data.results
  } catch (error) {
    console.log(error);
     return rejectWithValue(error);
  }
  })


// const editOwnerGroup=createAsyncThunk("editOwnerGroup/patch",async(id,{rejectWithValue})=>{
//     try {
//         const editData = await baseUrl.
//     } catch (error) {
//        return rejectWithValue(error);
//     }
//     })

const OwnerGroupSlice = createSlice({
  name: "OwnerGroupSlice",
  initialState: {
    loading: false,
    error: null,
    ownerId:null,
    ownerGroupData:[],
    ownerGroupEdit:null,
  },

  reducers:{
    getOwnerId:(state,{payload})=>{
      state.ownerId=payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetSingleOwnerGroup.pending, (state, action) => {
        state.loading=true,
        state.error=null

      })
      .addCase(asyncGetSingleOwnerGroup.fulfilled, (state, action) => {
        state.loading=false
        state.error=null
        state.ownerGroupData=action.payload
      })
      .addCase(asyncGetSingleOwnerGroup.rejected, (state, action) => {
        state.loading=false
        state.error=action.payload
      });
// post owner group
      builder
      .addCase(asyncPostOwnerGroup.pending, (state, action) => {
        state.loading=true,
        state.error=null

      })
      .addCase(asyncPostOwnerGroup.fulfilled, (state, action) => {
        state.loading=false
        state.error=null
        state.ownerGroupData=action.payload
      })
      .addCase(asyncPostOwnerGroup.rejected, (state, action) => {
        state.loading=false
        state.error=action.payload
      });
  },
 
});

export const {getOwnerId} = OwnerGroupSlice.actions;
export default OwnerGroupSlice.reducer;
