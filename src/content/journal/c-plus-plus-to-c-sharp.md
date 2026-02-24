---
title: C# from a C++ Perspective
date: 2026-02-22
details: Learning the .NET ecosystem
image: /village.jpg
tags: [C++, C#, dotnet]
---

I have always been a big fan of C/C++ since I learned it in college. Besides the fact it was the first language I learned, C++ really caught my attention with its high level abstractions combined with low level controls. While I was expecting to be hired C++ developer, my job asked me to use C# instead. While I had some experience with Unity and its C# implementation at this point, I had to relearn the basics of C# to start coding at my job. Here are some interesting aspects of C# I learned as a C++ developer.

Transitioning from C++ to C# was made easier due to their shared syntactic styles. I was able to use the exact same types in C# as I would in C++ which helped me start coding quicker. I felt at home with all the classes for object-oreinted design and include/using statements.

### Compiling the Code

The very first thing I noticed was the various naming conventions of the .NET ecosystem. Distinguishing between .NET, .NET Framework, .NET Core, .NET Standard, etc. was a struggle. I figured out that opting to use the latest .NET version was best practice and most other names were legacy names. The .NET versions are the compliment to compiler versions in C++; each has its own set features and valid syntaxes. Within each .NET version there was a whole list of settings in the *.csproj* file which I found to be very similar to C++ compiler options. From the *.csproj* file I could add nullability checks or configure different development and production builds. The nice thing about the *.csproj* file is that its standardized options are in XML format and the file itself can be easily be version controlled with Git. I found that editing the *.csproj* file was easier than building a makefile for my C++ projects.

### Packages

### Garbage Collection

C++ ingrained the idea that dynamically allocated memory to a mimimum. The major hurdle of this was the heavy use of the *new* keyword and by extension the garbage collector. The details of memory management I learned in C++ were abstracted away in C# by the garbage collector. No longer did I have to worry about whether an object was a copy or a reference, the garbage collection would handle all objects I allocated. Of course the internals of this system is anything but simple, but from a programming experience there is less to worry about. The garbage collector is not perfect, however. One of the more awkward parts of garbage collection in C# is the *IDisposable* interface. This interface is meant to get around the fact objects are destroyed non-deterministically by the garbage collector. Any class that manages a resource will almost certainly require the programmer to implement the *IDisposable* interface. This makes object cleanup more verbose and reliant on duck-typing: when a managing class relies on an interface which has a concrete class that implements *IDisposable*, the managing class is forced to check if each object implements *IDisposable* and call *Dispose()* to free the underlying resource deterministically. The proper way to implement the *Dispose()* function is burdensome; the programmer should implement conditional logic when the object is freed by managing code and when the garbage collector frees the object. The RAII model in C++ is much simpler. I much rather prefer knowing that each class is destroyed when it goes out of scope instead of having to check for *Dipose()* methods.

By this point I had found out that .NET for Unity development I knew was highly tailored for game development. It took some getting used to Visual Studio abstracting many of the dotnet commands for me. Letting Visual Studio set my defaults did cause some growing pains, but once I had found a good configuration the green run button did exactly what I needed it to do every time.

Features:
Difference between Visual Studio and pure dotnet.
Everything is a class.
Plentiful debugging support.
Modern dotnet has plenty of cross platform compatibility.
More syntactic sugar.
References are not explicitly managed.
The garbage collector over RAII.

### Why C# or C++?
Cross platform support
ease of development
Packages
