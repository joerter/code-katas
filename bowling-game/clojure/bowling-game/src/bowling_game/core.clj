(ns bowling-game.core)

(defn is-spare? [[firstRoll secondRoll]]
  (= 10 (+ firstRoll secondRoll)))

(defn is-strike? [[firstRoll]]
  (= 10 firstRoll))

(defn score-strike-spare [rolls]
  (apply + (take 3 rolls)))

(defn score-frame [rolls]
  (take 2 rolls))

(defn bowl [rolls]
  (loop [rolls rolls frame 10 score 0]
    (cond
      (= 0 frame) score
      (is-strike? rolls) (recur (drop 1 rolls) (dec frame) (+ score (score-strike-spare rolls)))
      (is-spare? rolls) (recur (drop 2 rolls) (dec frame) (+ score (score-strike-spare rolls)))
      :else (recur (drop 2 rolls) (dec frame) (+ score (apply + (score-frame rolls)))))))
