# 🚀 Guía Completa de Despliegue en Coolify con Dominio Propio

Esta guía te explica paso a paso cómo personalizar tu página, subirla a GitHub y desplegarla en tu servidor **Coolify** bajo tu propio dominio con HTTPS automático.

---

## 1. Personaliza tus Datos (`site.config.ts`)

Todo el contenido del sitio está centralizado en un solo archivo:
📁 **`src/config/site.ts`**

Ábrelo y modifica:
- **`name`** y **`handle`**: Tu nombre y alias de usuario (ej. `Alex Dev`, `@alexdev`).
- **`role`**: Tu título técnico (animado con el efecto cyberpunk `DecryptedText`).
- **`shortBio`** y **`about`**: Tu descripción profesional.
- **`domain`**: La URL final de tu dominio (ej. `https://tudominio.com`).
- **`socials`**: Tus perfiles reales de GitHub, LinkedIn, Twitter/X, Discord, Telegram y correo.
- **`hubLinks`**: Los enlaces de tu Link-in-Bio (agendar llamada, blog, CV, etc.).
- **`projects`**: Tus proyectos destacados con enlaces a repositorio y demo en vivo.
- **`skills`**: Tu arsenal técnico dividido por categorías.

---

## 2. Subir el Proyecto a tu Repositorio de GitHub

Abre una terminal en la carpeta del proyecto (`C:\Users\al3w0f\.gemini\antigravity\scratch\portfolio-hub`) y ejecuta:

```bash
# 1. Comprueba el estado de Git
git status

# 2. Añade todos los cambios
git add .

# 3. Realiza tu primer commit
git commit -m "feat: portfolio personal y hub de enlaces con react-bits"

# 4. Crea un nuevo repositorio en GitHub (desde github.com/new)
# Luego enlaza tu repositorio remoto:
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 5. Sube tu código a GitHub
git push -u origin main
```

---

## 3. Configurar tu Dominio en el Proveedor DNS

Para que tu dominio apunte a tu servidor de Coolify:

1. Ingresa al panel de control de tu registrador de dominio (Cloudflare, Namecheap, GoDaddy, Porkbun, etc.).
2. Ve a la sección de **DNS Records**.
3. Añade los registros según el tipo de dominio que vayas a usar:

### Si vas a usar el dominio raíz (ej. `tudominio.com`):
| Tipo | Nombre | Valor / Destino | Proxy (Cloudflare) |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `IP_PUBLICA_DE_TU_VPS` | DNS Only (o Proxied) |
| **CNAME** | `www` | `tudominio.com` | DNS Only (o Proxied) |

### Si vas a usar un subdominio (ej. `bio.tudominio.com` o `links.tudominio.com`):
| Tipo | Nombre | Valor / Destino | Proxy (Cloudflare) |
| :--- | :--- | :--- | :--- |
| **A** | `bio` | `IP_PUBLICA_DE_TU_VPS` | DNS Only (o Proxied) |

> 💡 **Nota sobre Cloudflare**: Si usas Cloudflare, se recomienda inicialmente dejar la nube en gris (**DNS Only**) durante el primer despliegue para que el proxy interno de Coolify (Traefik/Caddy) verifique y emita el certificado SSL de Let's Encrypt sin interferencias.

---

## 4. Crear la Aplicación en el Panel de Coolify

1. **Inicia sesión** en tu panel de Coolify (ej. `https://coolify.tudominio.com:8000` o la IP de tu VPS).
2. Entra en tu **Project** -> **Environment** (por defecto `production`).
3. Haz clic en **+ New Resource** -> Selecciona **Public Repository** o **Private Repository** (conectar con tu cuenta de GitHub).
4. Pega la URL de tu repositorio: `https://github.com/TU_USUARIO/TU_REPOSITORIO` y selecciona la rama `main`.
5. En la pantalla de configuración:
   - **Build Pack**: Selecciona **Nixpacks** (viene por defecto).
   - **Port**: Asegúrate de que el puerto de destino sea `3000`.
   - **Domains**: Escribe tu dominio completo con `https://`, por ejemplo:
     ```
     https://tudominio.com
     ```
     *(Coolify configurará automáticamente el reverse proxy Traefik y solicitará el certificado SSL Let's Encrypt para HTTPS).*
6. Haz clic en **Save** y luego en **Deploy**.

---

## 5. ¡Listo! Despliegues Continuos (CI/CD)

- Coolify monitoreará automáticamente tu rama `main`.
- Cada vez que hagas un cambio en `src/config/site.ts` y hagas `git push`, Coolify compilará y actualizará tu sitio web en tiempo real sin tiempo de inactividad (zero-downtime).
