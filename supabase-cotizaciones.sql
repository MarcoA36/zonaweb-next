-- Ejecutá este SQL en Supabase (SQL Editor) para crear la tabla de cotizaciones
-- https://supabase.com/dashboard -> Tu proyecto -> SQL Editor

create table if not exists cotizaciones (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  servicio text not null,
  nombre text not null,
  email text not null,
  telefono text not null,
  total_estimado integer not null,
  respuestas jsonb not null
);
