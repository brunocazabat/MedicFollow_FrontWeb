class axiosResult {
  constructor() {
    this.result = false;
    this.error = null;
  }

  setReturnValues(result, error) {
    this.result = result;
    this.error = error;
  }

  getReturnValues() {
    return { result: this.result, error: this.error };
  }
}

export default new axiosResult();
