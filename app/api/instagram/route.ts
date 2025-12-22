import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'caiuaconstrucoes'
    
    const mockPhotos = [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
        link: `https://www.instagram.com/p/example1/`,
        caption: 'Obra em andamento - Projeto residencial',
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
        link: `https://www.instagram.com/p/example2/`,
        caption: 'Acabamentos de qualidade',
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
        link: `https://www.instagram.com/p/example3/`,
        caption: 'Materiais de construção',
      },
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400',
        link: `https://www.instagram.com/p/example4/`,
        caption: 'Projeto finalizado',
      },
      {
        id: '5',
        url: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1541976590-713941681591?w=400',
        link: `https://www.instagram.com/p/example5/`,
        caption: 'Equipe de profissionais',
      },
      {
        id: '6',
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400',
        link: `https://www.instagram.com/p/example6/`,
        caption: 'Detalhes de acabamento',
      },
    ]

    return NextResponse.json({ 
      photos: mockPhotos,
      profileUrl: `https://www.instagram.com/${username}/`
    })
  } catch (error) {
    console.error('Error fetching Instagram photos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram photos' },
      { status: 500 }
    )
  }
}

