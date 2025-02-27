package main

type GreetService struct{}

func (g *GreetService) Greet(name string) string {
	println("name: " + name)
	return "Hello " + name + "!"
}
