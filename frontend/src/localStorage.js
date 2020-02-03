export const loadState = () => {
  try {
    const serializedState = localStorage.getItem ('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse (serializedState);
  } catch (err) { return undefined; }
  
};

export const saveState=(state)=>{

try{
  const toSave = {...state};
  delete toSave.ymaps;
  const serializedState=JSON.stringify(toSave)
  localStorage.setItem('state',serializedState)
}
catch (e) {
  console.log("mi tyt",e)
}
}