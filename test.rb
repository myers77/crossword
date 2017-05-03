require 'acrosslite'
require 'json'

ac = Acrosslite.new(:filepath => "Oct1998.puz")
puts 'kek'

puts 

data = Hash.new
data["title"] = ac.title
data["author"] = ac.author
data["diagram"] = ac.diagram       # -> two-dimensional matrix of the diagram 
data["solution"] = ac.solution      # -> two-dimensional matrix of the solution
data["rows"] = ac.rows          # -> Number of rows
data["columns"] = ac.columns       # -> Number of columns

open('puzzle.json', 'w') { |f| f << JSON.generate(data) }