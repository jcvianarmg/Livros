CREATE TABLE [dbo].[Assunto](
	[CodAs] [int] NOT NULL,
	[Descricao] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Assunto] PRIMARY KEY CLUSTERED 
(
	[CodAs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Autor](
	[CodAu] [int] NOT NULL,
	[Nome] [varchar](40) NOT NULL,
 CONSTRAINT [PK_Autor] PRIMARY KEY CLUSTERED 
(
	[CodAu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Livro](
	[Codl] [int] NOT NULL,
	[Titulo] [varchar](40) NOT NULL,
	[Editora] [varchar](40) NULL,
	[Edicao] [int] NOT NULL,
	[AnoPublicacao] [nchar](4) NOT NULL,
 CONSTRAINT [PK_Livro] PRIMARY KEY CLUSTERED 
(
	[Codl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Livro_Assunto](
	[Livro_Codl] [int] NOT NULL,
	[Assunto_CodAs] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Livro_Assunto]  WITH CHECK ADD  CONSTRAINT [FK_Livro_Assunto_Assunto] FOREIGN KEY([Assunto_CodAs])
REFERENCES [dbo].[Assunto] ([CodAs])
GO

ALTER TABLE [dbo].[Livro_Assunto] CHECK CONSTRAINT [FK_Livro_Assunto_Assunto]
GO

ALTER TABLE [dbo].[Livro_Assunto]  WITH CHECK ADD  CONSTRAINT [FK_Livro_Assunto_Livro] FOREIGN KEY([Livro_Codl])
REFERENCES [dbo].[Livro] ([Codl])
GO

ALTER TABLE [dbo].[Livro_Assunto] CHECK CONSTRAINT [FK_Livro_Assunto_Livro]
GO

CREATE TABLE [dbo].[Livro_Autor](
	[Livro_Codl] [int] NOT NULL,
	[Autor_CodAu] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Livro_Autor]  WITH CHECK ADD  CONSTRAINT [FK_Livro_Autor_Autor] FOREIGN KEY([Autor_CodAu])
REFERENCES [dbo].[Autor] ([CodAu])
GO

ALTER TABLE [dbo].[Livro_Autor] CHECK CONSTRAINT [FK_Livro_Autor_Autor]
GO

ALTER TABLE [dbo].[Livro_Autor]  WITH CHECK ADD  CONSTRAINT [FK_Livro_Autor_Livro] FOREIGN KEY([Livro_Codl])
REFERENCES [dbo].[Livro] ([Codl])
GO

ALTER TABLE [dbo].[Livro_Autor] CHECK CONSTRAINT [FK_Livro_Autor_Livro]
GO



