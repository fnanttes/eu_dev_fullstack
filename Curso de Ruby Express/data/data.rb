file = File.readlines("./teste.txt")
#puts file
#puts "--------------------------"

string = "Ruby 2021"

save = File.open("./teste.txt", "a+")
save.puts(string)
save.close
file = File.readlines("/Curso de Ruby Express/data/teste.txt")
puts file
