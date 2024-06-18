# Atribui a string "hello world" à variável 'hello'
hello = "hello world"
# Imprime o conteúdo da variável 'hello'
puts hello

# Atribui a string "Eu gosto de Ruby" à variável 'diz'
diz = "Eu gosto de Ruby"
# Imprime o conteúdo da variável 'diz'
puts diz

# Substitui a substring "gosto" na variável 'diz' por "*gosto*"
diz['gosto'] = "*gosto*"
# Converte a string para letras maiúsculas e imprime
puts diz.upcase

# Imprime a string modificada 'diz' 5 vezes, cada vez em uma nova linha
5.times { puts diz }

print diz.upcase

nome = gets.chomp

puts nome

puts "Testando nome #{nome}"

puts nome.downcase
