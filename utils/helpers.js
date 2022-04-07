
module.exports = {
    // format date to look like MM/DD/YYYY
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    // format words to where it become plural if more than one
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
    // limit project cards to a certain number to display
    limit: function(arr,limit) {
      if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
    }
  }