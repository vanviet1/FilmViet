export const getObjectById = (data,id) => {
    return data?.find( e => e.id == id) || "unknown";
}

export const filterByid = (data,id,name) => {
     return data?.filter(e => e[name] == id);
}