function filter(type, ...values) {
  for (let i = 0; i < values.length; i++) {
    if(typeof(values[i]) === type) {
      console.log(values[i]);
    }
  }

}

filter("boolean", 1, 2, 3, 4, "hello", false, "world");
