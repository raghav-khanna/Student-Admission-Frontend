export const brute_force = (id, mains_rank, prefs) => {
    let text;
    let values = [id, mains_rank];
    if (prefs.length >= 1) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000)]:: pref[], -1, false)";
      values = [...values, prefs[0].dsp];
    }
    if (prefs.length >= 2) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000)]:: pref[], -1, false)";
      values = [...values, prefs[1].dsp];
    }
    if (prefs.length >= 3) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000)]:: pref[], -1, false)";
      values = [...values, prefs[2].dsp];
    }
    if (prefs.length >= 4) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000)]:: pref[], -1, false)";
      values = [...values, prefs[3].dsp];
    }
    if (prefs.length >= 5) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000),($7,10000)]:: pref[], -1, false)";
      values = [...values, prefs[4].dsp];
    }
    if (prefs.length >= 6) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000),($7,10000),($8,10000)]:: pref[], -1, false)";
      values = [...values, prefs[5].dsp];
    }
    return { text, values };
  };