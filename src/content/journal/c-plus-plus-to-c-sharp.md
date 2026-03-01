---
title: C# from a C++ Perspective
date: 2026-03-01
details: Learning the .NET ecosystem as C++ developer
image: /village.jpg
tags: [C++, C#, dotnet]
---

My background in software development started with C++ and I must admit I am heavily biased towards the language. I would love to use C++ whenever I get the chance, but I quickly found out that business required me to use a variety of languages. The one language that I have come to love from all this exposure is C#. C# reminds me of C++ in many ways, from its familiar syntax to its object based approach, but I have found plenty of surprises when I thought C# was just a C++ extension. Today I want to go over a few of the new and interesting features a C++ developer would find when starting to learn C# for the first time.

### Compiling the Code

The first thing a new C# developer will find is that C# compiles down to an intermediate language that enables a degree of cross-compatibility. There are many technical details to this, but what I want to cover is how a developer would compile code. All building of the program happens through a *.csproj* project file in C#. My Visual Studio makes this easy to do by providing a button to automatically build and run my software, but this can also be achieved by running the terminal command `dotnet run` in the project’s directory. What is nice about the project file is that it is an XML file that fits nicely into version control software like Git. To allow another developer to build my code, all I need to do is share my *.csproj* and source code and they can run the command above to get an executable. All custom compiling options, build configurations and dependencies are managed straight from the project file. Builds do not require makefile or separate documentation on specific flags and includes used; everything is managed in one shareable file and one command.

### Packages

A feature not native to C++ but I found very helpful in C# is package management, specifically through the NuGet package manager. In C++ I suffered trying to verify that third-party libraries integrated into my project and were the correct version of what I needed. Using NuGet with C# I find grabbing third-party code to be a breeze. All it takes for me to add a package to my project is to run one command, add my features, and build. The package manager automatically grabs dependencies of the package I requested and ensures that the code is compatible with the .NET version I am using. All of these packages are managed in the previously mentioned project file, allowing quick changes to specific package versions. What used to be a headache to manage in C++ now becomes an automated process in C#.

### Garbage Collection

A hard habit I had to break when I switched to C# was the use of the *new* keyword in my code. I was told to keep dynamic memory use at a minimum, but in C# *new* takes on a totally different meaning and is used everywhere. The heavy-lifting of memory management is not done by the programmer in C#, rather its garbage collector is the one allocating and deallocating memory for variables. C# simplifies the syntax of value and reference types so the programmer does not necessarily have to worry about whether an object stays on the stack or allocates to the heap. When one object goes out of scope and is no longer referenced, the garbage collector simply deallocates the object for the programmer. Many such pitfalls found with manual memory management in C++ are solved by this garbage collector. I still have my reservations about the garbage collector, however. The garbage collector by its nature is non-deterministic when deallocating unreferenced objects, making it difficult to reason when a resource is truly deallocated. In order to maintain some determinism with freeing resources, C# provides a system interface named *IDisposable* which adds the *Dispose* method to classes. This function is normally responsible for being called when an object should be freed at a specific point in the code. It admittedly gets bulky and cumbersome to write the proper *IDisposable* implementation and forces managing code to check and dispose an object if it happens to implement *IDisposable*. The following small example demonstrates how a programmer could free resources used across multiple scopes using *IDisposable*:

```csharp

IMyInterface foo = Bar();

foo.DoWork();
foo.DoMoreWork();
ProcessData(foo);

// test if we need to free foo's resources
if (foo is IDisposable d)
{
    d.Dispose();
}


```

In the example we are not sure if the concrete result returned by *Bar()* implements *IDisposable*, so we check for the interface and call *Dispose()* if needed to free resources at that point in the code. We could force *IMyInterface* to implement *IDisposable*, but that runs the possibility of concrete classes that do not need *Dispose()* violating the Interface Segregation Principle. The example does provide certainty that resources will be freed at a specific point in time, but at the cost of making the code harder to follow. Due to the above factors, I still prefer the C++ RAII resource management pattern due to its relative simplicity, but C# garbage collection in addition to its *IDisposable* workaround does take a mental burden out of programming.

### Why C#?

At the end of the day, C# and C++ fill two different niches in the development world. C# can provide fast development cycles through standardized project files, built-in third-party package support through NuGet, and automatic memory management with its garbage collector; among others. These factors do not make C++ obsolete by any means. RAII and low-level control of objects are a part of the reason that make C++ my preferred language. There are times where C# is better to use and there are times where C++ is better to use. I find that for applications like embedded software the deterministic nature of C++ cannot be substituted, while C# is great for desktop app development with its ease of use. For these reasons, both C# and C++ are good languages to have in your developer toolkit.
