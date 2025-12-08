<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BasicAuth
{
    public function handle(Request $request, Closure $next)
    {
        $user = env('ADMIN_USER', 'admin');
        $pass = env('ADMIN_PASS', 'secret');

        if ($request->getUser() === $user && $request->getPassword() === $pass) {
            return $next($request);
        }

        $headers = ['WWW-Authenticate' => 'Basic'];
        return response('Unauthorized', 401, $headers);
    }
}
