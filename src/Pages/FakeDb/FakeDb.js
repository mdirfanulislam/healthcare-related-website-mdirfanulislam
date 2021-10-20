const addToDb = id => {
    const exists = getDb();
    let departDetail = {};
    if (!exists) {
      departDetail[id] = 1;
    }
    else {
      departDetail = JSON.parse(exists);
      if (departDetail[id]) {
        const newCount = departDetail[id] + 1;
        departDetail[id] = newCount;
      }
      else {
        departDetail[id] = 1;
      }
    }
    updateDb(departDetail);
  }
  
  const getDb = () => localStorage.getItem('departDetail');
  
  const updateDb = cart => {
    localStorage.setItem('departDetail', JSON.stringify(cart));
  }
  
  const getStoredDetail = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }

export {addToDb, getStoredDetail};