class Hamming
  VERSION=1
  def self.compute(string1, string2)
    raise ArgumentError if string1.length != string2.length
    counter=0
    string1.length.times do |i|
      counter+=1 if string1[i]!=string2[i]
    end
    return counter
  end
end