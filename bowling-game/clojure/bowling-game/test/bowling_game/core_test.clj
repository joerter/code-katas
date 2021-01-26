(ns bowling-game.core-test
  (:require [clojure.test :refer :all]
            [bowling-game.core :refer :all]))

(defn bowl-game [rolls pins]
  (apply (partial conj rolls) (repeat (- 20 (count rolls)) pins)))

(deftest bowling
  (testing "all gutterballs"
    (is (= 0 (bowl (repeat 20 0)))))
  
  (testing "all ones"
    (is (= 20 (bowl (repeat 20 1)))))
  
  (testing "one spare"
    (is (= 12 (bowl (bowl-game [5 5 1] 0)))))
  
  (testing "one strike"
    (is (= 14 (bowl (bowl-game [10 1 1] 0)))))
  
  (testing "one strike then one spare"
    (is (= 33 (bowl (bowl-game [10 0 10 1 1] 0)))))
  
  (testing "perfect game!"
    (is (= 300 (bowl (repeat 12 10))))))
