let list = []

module.exports.create = (contents) =>{
  if(typeof(contents) === 'string' && contents.length < 50){
    list.push(contents)
    return true
  }
  return false
}

module.exports.getList = () => {
  return list.map((item,index)=>{
    return {'id': index, 'text':item}
  })
}

module.exports.delete = (id) => {
  if(Number.isInteger(id) && id < list.length){
    delete list[id]
    return true
  }
  return false
}

module.exports.update = (id,text) => {
  if(!Number.isInteger(id) || !(id < list.length)){
    return false
  }
  else if(!(text.length < 50)){
    return false
  }
  else{
    list[id] = text
    return true
  }
}
